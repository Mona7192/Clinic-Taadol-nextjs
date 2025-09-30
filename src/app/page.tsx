import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TheorySection from "@/components/TheorySection";
import EducationalVideos from "@/components/video-card";
import LatestArticles from "@/components/article-card";

import { mainArticle, sideArticles } from "@/data/articles";
import { mainVideo, sideVideos } from "@/data/videos";



export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <TheorySection />
      <EducationalVideos mainVideo={mainVideo} sideVideos={sideVideos} />
      <LatestArticles mainArticle={mainArticle} sideArticles={sideArticles} />
      
    </>
  );
}
