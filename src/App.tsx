import { HeroSection } from "./components/HeroSection";
import { Header } from "./components/Header";
import { Project } from "./components/Project";
import { Skills } from "./components/Skills";
import { ExperienceAndEducation } from "./components/ExperienceAndEducation";
import { Footer } from "./components/Footer";
import "./App.css"; // Import custom styles

function App() {
  return (
    <>
      {/* Background Wrapper */}
      <div className="relative w-full h-full overflow-hidden">
        <div className="absolute inset-0 newspaper-bg animate-scrollNews"></div> {/* Newspaper effect */}
        <div className="absolute inset-0 bg-white/80"></div> {/* Overlay for readability */}

        {/* Main Content */}
        <div className="relative max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 text-black">
          <Header />
          <main className="mt-10">
            <HeroSection />
            <Project />
            <Skills />
            <ExperienceAndEducation />
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
