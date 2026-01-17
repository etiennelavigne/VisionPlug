import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import VideoGallery from "@/components/VideoGallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-neutral-950 text-white">
      <Navbar />
      <Hero />
      <Services />
      <VideoGallery />
      <Footer />
    </main>
  );
}
