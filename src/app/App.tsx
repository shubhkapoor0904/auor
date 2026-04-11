import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { StorySection } from "./components/StorySection";
import { BrandLogos } from "./components/BrandLogos";
import { Services } from "./components/Services";
import { Testimonial } from "./components/Testimonial";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { InstagramFeed } from "./components/InstagramFeed";
import { CustomCursor } from "./components/ui/CustomCursor";
import { Toaster } from "sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <StorySection />
        <BrandLogos />
        <Services />
        <Testimonial />
        <CTA />
        <InstagramFeed />
      </main>
      <Footer />
      <Toaster theme="dark" position="bottom-right" />
    </div>
  );
}