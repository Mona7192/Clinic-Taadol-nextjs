import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TheorySection from "@/components/TheorySection";
import VideoCard from "@/components/video-card";
import LatestArticles from "@/components/article-card";




export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <TheorySection />
      <VideoCard id={0} title={""} description={""} thumbnail={""} slug={""} />
      <LatestArticles />
      
    </>
  );
}
