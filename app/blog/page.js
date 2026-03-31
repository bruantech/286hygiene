import BlogArticleSection from "../../components/blog/BlogArticleSection";
import CallToAction from "../../components/shared/CallToAction";
import Footer from "../../components/shared/Footer";
import Header from "../../components/shared/Header";
import PageHero from "../../components/shared/PageHero";
import { getPageMetadata } from "../../lib/siteData";

export const metadata = getPageMetadata({
  title: "Cleaning Tips and Hygiene Blog",
  description:
    "Read cleaning tips, hygiene guidance, and maintenance advice from 286 Hygiene for homes, offices, and commercial spaces.",
  path: "/blog"
});

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <PageHero
          title="The 286 Blog"
          animatedTitlePrefix="The 286"
          animatedTitleWords={["Blog", "Insights", "Guides", "Tips"]}
          animatedTitleInterval={2800}
          animatedTitleClassName="text-white"
          backgroundImage="/images/blogHero.webp"
          alt="Minimal interior representing the 286 blog"
          sectionClassName="px-4 pb-10 pt-4 sm:px-6 lg:px-8"
          imageClassName="h-[11rem] w-full object-cover sm:h-[14rem] lg:h-[16rem]"
          overlayClassName="bg-[linear-gradient(90deg,_rgba(245,246,243,0.22)_0%,_rgba(196,167,119,0.18)_52%,_rgba(114,86,44,0.16)_100%)]"
          contentClassName="absolute inset-y-0 left-0 flex max-w-[26rem] items-center px-4 sm:px-6"
          titleClassName="text-5xl font-black leading-none text-white sm:text-6xl"
        />
        <BlogArticleSection />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
