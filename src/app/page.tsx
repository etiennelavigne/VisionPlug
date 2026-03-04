import Hero from "@/components/Hero";
import VideoGallery from "@/components/VideoGallery";
import PhotoCarousel from "@/components/PhotoCarousel";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <Hero />
      <VideoGallery />
      <PhotoCarousel />
      <Footer />
    </main>
  );
}
