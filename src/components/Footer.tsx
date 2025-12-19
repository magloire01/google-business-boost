import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center">
            <img src={logo} alt="Google Business Boost" className="h-10 brightness-200" />
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-background/80 text-sm">
              © {new Date().getFullYear()} Google Business Boost. Tous droits réservés.
            </p>
            <p className="text-background/60 text-xs mt-2">
              Optimisation de fiches Google Business Profile
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
