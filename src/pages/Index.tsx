import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 text-center border-t border-neon-cyan/20">
        <div className="container mx-auto px-6">
          <p className="text-muted-foreground">
            © 2024 Alex Developer. Made with{" "}
            <span className="text-neon-pink animate-pulse">❤️</span> and{" "}
            <span className="text-neon-cyan">React</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
