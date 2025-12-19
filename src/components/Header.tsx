import logo from "@/assets/logo.jpg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img src={logo} alt="Google Business Boost" className="h-10 md:h-12" />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#avantages" className="text-foreground/80 hover:text-primary transition-colors font-medium">
            Avantages
          </a>
          <a href="#pourquoi" className="text-foreground/80 hover:text-primary transition-colors font-medium">
            Pourquoi nous
          </a>
          <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors font-medium">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
