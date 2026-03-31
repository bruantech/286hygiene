"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../components/auth/AuthContext";
import { db, auth } from "../../lib/firebase";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { Plus, Edit2, Trash2, LogOut, Loader2, ArrowLeft, Mail, MessageSquare, BookOpen, CheckCircle, Circle, Phone, MapPin, Key } from "lucide-react";
import BlogModal from "../../components/dashboard/BlogModal";
import ChangePasswordModal from "../../components/dashboard/ChangePasswordModal";
import { signOut, updatePassword } from "firebase/auth";
import Link from "next/link";
import Image from "next/image";

export default function DashboardPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  
  // Tabs "blogs" | "messages"
  const [activeTab, setActiveTab] = useState("blogs");

  // Blogs State
  const [blogs, setBlogs] = useState([]);
  const [loadingBlogs, setLoadingBlogs] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);

  // Messages State
  const [messages, setMessages] = useState([]);
  const [loadingMessages, setLoadingMessages] = useState(true);

  // Global Saving state (to prevent double-clicks)
  const [savingId, setSavingId] = useState(null);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/dashboard/login");
    }
  }, [user, authLoading, router]);

  useEffect(() => {
    if (!user) return;
    const qBlogs = query(collection(db, "blogs"), orderBy("date", "desc"));
    const unsubBlogs = onSnapshot(qBlogs, (snapshot) => {
      setBlogs(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      setLoadingBlogs(false);
    });
    return () => unsubBlogs();
  }, [user]);

  useEffect(() => {
    if (!user) return;
    const qMessages = query(collection(db, "messages"), orderBy("createdAt", "desc"));
    const unsubMessages = onSnapshot(qMessages, (snapshot) => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      setLoadingMessages(false);
    });
    return () => unsubMessages();
  }, [user]);

  const unreadCount = messages.filter(m => !m.read).length;

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/dashboard/login");
  };

  const handlePasswordSubmit = async (newPassword) => {
    try {
      setSavingId("password");
      await updatePassword(auth.currentUser, newPassword);
      alert("Password updated successfully!");
      setIsPasswordModalOpen(false);
    } catch (error) {
      console.error("Error updating password:", error);
      if (error.code === "auth/requires-recent-login") {
        alert("For your security, changing your password requires a recent login. Please log out and log back in, then try again.");
      } else {
        alert("Failed to update password: " + error.message);
      }
    } finally {
      setSavingId(null);
    }
  };

  // --- BLOG ACTIONS ---
  const handleOpenBlogModal = (blog = null) => {
    setEditingBlog(blog);
    setIsModalOpen(true);
  };

  const handleModalSubmit = async (formData) => {
    try {
      if (editingBlog && editingBlog.id) {
        setSavingId(editingBlog.id);
        await updateDoc(doc(db, "blogs", editingBlog.id), {
          ...formData,
          updatedAt: serverTimestamp(),
        });
      } else {
        setSavingId("new");
        await addDoc(collection(db, "blogs"), {
          ...formData,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        });
      }
      setIsModalOpen(false);
      setEditingBlog(null);
    } catch (error) {
      console.error("Error saving blog:", error);
      alert("Failed to save blog.");
    } finally {
      setSavingId(null);
    }
  };

  const handleDeleteBlog = async (id) => {
    if (!window.confirm("Delete this blog post?")) return;
    try {
      setSavingId(id);
      await deleteDoc(doc(db, "blogs", id));
    } catch (error) {
      console.error("Error deleting blog", error);
    } finally {
      setSavingId(null);
    }
  };

  // --- MESSAGE ACTIONS ---
  const handleToggleRead = async (message) => {
    try {
      setSavingId(`read-${message.id}`);
      await updateDoc(doc(db, "messages", message.id), { read: !message.read });
    } catch (err) {
      console.error("Error updating read status", err);
    } finally {
      setSavingId(null);
    }
  };

  const handleDeleteMessage = async (id) => {
    if (!window.confirm("Permanently delete this message?")) return;
    try {
      setSavingId(`del-${id}`);
      await deleteDoc(doc(db, "messages", id));
    } catch (error) {
      console.error("Error deleting message", error);
    } finally {
      setSavingId(null);
    }
  };

  // Prevent flash while checking auth
  if (authLoading || (!user && !authLoading)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">
        <Loader2 className="w-8 h-8 animate-spin text-[#2cf0d5]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4fbfb] pb-24">
      {/* HEADER */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-gray-100 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-6">
              <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-[#15232a] transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span className="hidden sm:inline font-medium text-sm">Return to Site</span>
              </Link>
              <div className="h-6 w-px bg-gray-200" />
              <h1 className="text-2xl font-bold text-[#15232a] tracking-tight">
                286 Admin <span className="text-[#0b8768]">Dashboard</span>
              </h1>
            </div>
            
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                onClick={() => setIsPasswordModalOpen(true)}
                className="p-2 sm:px-4 sm:py-2 text-[#0b8768] hover:bg-[#0b8768]/10 rounded-xl transition-colors flex items-center gap-2 font-medium"
              >
                <Key className="w-5 h-5" />
                <span className="hidden sm:inline">Change Password</span>
              </button>
              <button
                onClick={handleLogout}
                className="p-2 sm:px-4 sm:py-2 text-red-500 hover:bg-red-50 rounded-xl transition-colors flex items-center gap-2 font-medium"
              >
                <LogOut className="w-5 h-5" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>

        {/* TABS MENU */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8 -mb-px">
            <button
              onClick={() => setActiveTab("blogs")}
              className={`whitespace-nowrap py-4  cursor-pointer px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
                activeTab === "blogs"
                  ? "border-[#0b8768] text-[#0b8768]"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Manage Blogs
            </button>
            
            <button
              onClick={() => setActiveTab("messages")}
              className={`whitespace-nowrap py-4  cursor-pointer px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
                activeTab === "messages"
                  ? "border-[#0b8768] text-[#0b8768]"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              Quote Requests
              {unreadCount > 0 && (
                <span className={`ml-2 py-0.5 px-2.5 rounded-full text-xs font-bold ${activeTab === 'messages' ? 'bg-[#0b8768] text-white' : 'bg-red-100 text-red-600'}`}>
                  {unreadCount}
                </span>
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        
        {/* --- BLOGS VIEW --- */}
        {activeTab === "blogs" && (
          <div className="bg-white  shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-gray-100 p-6 sm:p-10 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div>
                <h2 className="text-3xl font-extrabold text-[#15232a]">Manage Blogs</h2>
                <p className="text-gray-500 mt-2">Create, and edit blogs.</p>
              </div>
              <button
                onClick={() => handleOpenBlogModal()}
                className="flex cursor-pointer items-center gap-2 px-6 py-3.5 bg-[#0b8768] text-white font-bold rounded-2xl hover:shadow-lg hover:-translate-y-0.5 transition-all group"
              >
                <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                Add New Blog
              </button>
            </div>

            <div className="overflow-x-auto -mx-6 sm:mx-0">
              <div className="min-w-full inline-block align-middle px-6 sm:px-0">
                <div className="overflow-hidden border border-gray-100 sm:rounded-2xl">
                  <table className="min-w-full divide-y divide-gray-100">
                    <thead className="bg-[#fbfcfa]">
                      <tr>
                        <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider w-[40%]">Blog Details</th>
                        <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider min-w-[120px]">Author</th>
                        <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider min-w-[120px]">Date</th>
                        <th scope="col" className="relative  px-6 py-4"><span className="sr-only">Actions</span></th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-50">
                      {loadingBlogs ? (
                        <tr>
                          <td colSpan="4" className="px-6 py-12 text-center text-gray-500">
                            <Loader2 className="w-8 h-8 animate-spin mx-auto text-[#0b8768]" />
                          </td>
                        </tr>
                      ) : blogs.length === 0 ? (
                        <tr>
                          <td colSpan="4" className="px-6 py-16 text-center text-gray-500 bg-gray-50/50">
                            <Plus className="w-12 h-12 mx-auto mb-2 text-gray-300" />
                            <p className="text-lg font-medium text-[#15232a]">No blogs found</p>
                            <p className="mt-1 text-sm text-gray-400">write your first blog!</p>
                          </td>
                        </tr>
                      ) : (
                        blogs.map((blog) => (
                          <tr key={blog.id} className="hover:bg-gray-50/50 transition-colors group">
                            <td className="px-6 py-4">
                              <div className="flex items-center">
                                <div className="h-14 w-20 flex-shrink-0 relative overflow-hidden rounded-lg border border-gray-100 bg-gray-100">
                                  {blog.imageUrl ? (
                                    <Image className="object-cover" src={blog.imageUrl} alt="" fill unoptimized />
                                  ) : (
                                    <div className="w-full h-full flex items-center justify-center text-xs text-gray-400"></div>
                                  )}
                                </div>
                                <div className="ml-4 flex-1 truncate max-w-xs md:max-w-md lg:max-w-lg">
                                  <div className="text-sm font-bold text-[#15232a] truncate">{blog.title}</div>
                                  <div className="text-xs text-gray-400 truncate mt-1">{blog.content?.substring(0, 60)}...</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="text-sm font-medium text-gray-700 bg-gray-100 inline-flex px-2.5 py-1 rounded-full">{blog.author}</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{blog.date || "Unknown"}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <div className="flex items-center justify-end gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                                <button onClick={() => handleOpenBlogModal(blog)} disabled={savingId === blog.id} className="text-[#0b8768] hover:bg-emerald-50 p-2 rounded-lg transition-colors">
                                  <Edit2 className="w-4 h-4" />
                                </button>
                                <button onClick={() => handleDeleteBlog(blog.id)} disabled={savingId === blog.id} className="text-red-400 hover:bg-red-50 p-2 rounded-lg transition-colors disabled:opacity-50">
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- MESSAGES VIEW --- */}
        {activeTab === "messages" && (
           <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-gray-100 p-6 sm:p-10 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
               <div>
                 <h2 className="text-3xl font-extrabold text-[#15232a]">Quote Requests</h2>
                 <p className="text-gray-500 mt-2">Review and manage messages from your website.</p>
               </div>
             </div>

             <div className="space-y-4">
                {loadingMessages ? (
                  <div className="py-12 flex justify-center"><Loader2 className="w-8 h-8 animate-spin text-[#0b8768]" /></div>
                ) : messages.length === 0 ? (
                  <div className="py-16 text-center border-2 border-dashed border-gray-100 rounded-3xl">
                    <Mail className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                    <p className="text-lg font-medium text-[#15232a]">Your inbox is empty</p>
                    <p className="text-sm text-gray-400 mt-1">New requests from the contact page will appear here.</p>
                  </div>
                ) : (
                  messages.map((msg) => (
                    <div 
                      key={msg.id} 
                      className={`relative overflow-hidden rounded-2xl border ${msg.read ? 'border-gray-200 bg-white opacity-80 hover:opacity-100 transition-opacity' : 'border-emerald-200 bg-emerald-50/30'}`}
                    >
                      {/* Unread indicator */}
                      {!msg.read && (
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-[#0b8768]" />
                      )}
                      
                      <div className="p-6 sm:p-8">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                          {/* Customer Info */}
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-1">
                              <h3 className="text-xl font-bold text-[#15232a]">{msg.fullName || "Unknown Sender"}</h3>
                              <span className="text-xs font-semibold px-2.5 py-1 bg-gray-100 rounded-full text-gray-600">
                                {msg.service || "General Inquiry"}
                              </span>
                            </div>
                            
                            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500 mt-3 font-medium">
                              <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> <a href={`mailto:${msg.email}`} className="hover:text-[#0b8768] hover:underline">{msg.email}</a></div>
                              <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> <a href={`tel:${msg.phone}`} className="hover:text-[#0b8768] hover:underline">{msg.phone}</a></div>
                              {msg.location && <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {msg.location}</div>}
                            </div>

                            <div className="mt-6 bg-white/50 border border-gray-100 rounded-xl p-5 text-gray-700 leading-relaxed">
                              {/* Maintain newlines in message */}
                              {msg.message ? msg.message.split('\n').map((line, i) => <span key={i}>{line}<br/></span>) : <span className="italic text-gray-400">No message provided</span>}
                            </div>
                          </div>

                          {/* Actions / Meta */}
                          <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-4 shrink-0 sm:pl-6 sm:border-l border-gray-100">
                             <span className="text-xs font-medium text-gray-400">
                               {msg.createdAt?.toDate ? new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' }).format(msg.createdAt.toDate()) : 'Recent'}
                             </span>
                             
                             <div className="flex gap-2">
                               <button 
                                 onClick={() => handleToggleRead(msg)}
                                 disabled={savingId === `read-${msg.id}`}
                                 className={`p-2.5 rounded-xl border flex items-center justify-center transition-colors disabled:opacity-50 ${msg.read ? 'border-gray-200 text-gray-400 hover:bg-gray-50 hover:text-gray-600' : 'border-[#0b8768]/20 bg-[#0b8768]/10 text-[#0b8768] hover:bg-[#0b8768]/20'}`}
                                 title={msg.read ? "Mark as unread" : "Mark as read"}
                               >
                                 {msg.read ? <Circle className="w-4 h-4" /> : <CheckCircle className="w-4 h-4" />}
                               </button>

                               <button 
                                 onClick={() => handleDeleteMessage(msg.id)}
                                 disabled={savingId === `del-${msg.id}`}
                                 className="p-2.5 rounded-xl border border-red-100 text-red-500 hover:bg-red-50 transition-colors disabled:opacity-50"
                                 title="Delete message"
                               >
                                 <Trash2 className="w-4 h-4" />
                               </button>
                             </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
             </div>
           </div>
        )}

      </main>

      <BlogModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleModalSubmit} editingBlog={editingBlog} isLoading={savingId !== null} />
      
      <ChangePasswordModal 
        isOpen={isPasswordModalOpen} 
        onClose={() => setIsPasswordModalOpen(false)} 
        onSubmit={handlePasswordSubmit} 
        isLoading={savingId === "password"} 
      />
    </div>
  );
}
