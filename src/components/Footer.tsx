import { motion } from "framer-motion";
import { Instagram, MapPin } from "lucide-react";
import logo from "@/assets/via-marca-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-deep-black border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center"
          >
            <img
              src={logo}
              alt="Via Marca"
              className="h-14 w-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col sm:flex-row items-center gap-6 text-muted-foreground"
          >
            <a
              href="https://instagram.com/via.marca"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors duration-300"
            >
              <Instagram size={20} />
              <span className="font-body">@viamarca</span>
            </a>

            <div className="flex items-center gap-2">
              <MapPin size={20} className="text-primary" />
              <span className="font-body">Belo Horizonte - MG</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 pt-6 border-t border-primary/10 text-center"
        >
          <p className="text-muted-foreground text-sm font-body">
            © {new Date().getFullYear()} Via Marca. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
