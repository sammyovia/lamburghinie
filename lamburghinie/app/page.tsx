import Image from "next/image";
import LandingPage from "./components/landing/LandingPage";
import GalleryPage from "./components/gallery/GalleryPage";
import About from "./components/about/About";
import HeroSection from "./components/hero/HeroSection";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col text-center justify-center items-center">
<div className="flex flex-col items-center justify-evenly min-h-screen">
<HeroSection/> 
<About/>                                    
<LandingPage />                                     
<GalleryPage />                                                                         
<Footer/>
</div>
</main>
  );
}
