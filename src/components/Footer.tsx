import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-poppins font-bold gradient-text">M</span>
            <span className="text-lg font-poppins font-semibold text-foreground">
              Manivasagam
            </span>
          </div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-sm text-muted-foreground font-inter flex items-center gap-1"
          >
            © {new Date().getFullYear()} Manivasagam. Built with
            <Heart className="w-4 h-4 text-primary fill-primary" />
            & Automation
          </motion.p>

          {/* Quick Links */}
          <div className="flex items-center gap-6">
            {['About', 'Skills', 'Experience', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-inter"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
