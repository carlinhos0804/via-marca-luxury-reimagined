import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5531998971100?text=Olá%2C%20estava%20no%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos";

const WhatsAppButton = () => {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full 
                 flex items-center justify-center shadow-lg hover:shadow-xl
                 transition-shadow duration-300"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={32} className="text-white" fill="white" />
      
      {/* Pulse Animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
    </motion.a>
  );
};

export default WhatsAppButton;
