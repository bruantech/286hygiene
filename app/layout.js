import "./globals.css";

export const metadata = {
  title: "286 Project",
  description: "A Next.js project with JavaScript and Tailwind CSS."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

