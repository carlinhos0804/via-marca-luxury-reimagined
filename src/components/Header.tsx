import { motion } from "framer-motion";
import logo from "@/assets/via-marca-logo.png";

const WHATSAPP_LINK = "https://wa.me/5531998971100?text=Olá%2C%20estava%20no%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-primary/30"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex items-center"
        >
          <img
            src={logo}
            alt="Via Marca - Produtos Personalizados"
            className="h-16 md:h-[75px] w-auto"
          />
        </motion.div>

        <motion.a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2.5 bg-primary text-primary-foreground font-semibold rounded-md 
                     hover:bg-gold-light transition-all duration-300 shadow-gold
                     text-sm md:text-base font-body tracking-wide"
        >
          Falar com Especialista
        </motion.a>
      </div>
    </motion.header>
  );
};

export default Header;
