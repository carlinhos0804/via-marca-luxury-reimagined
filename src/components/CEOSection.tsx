import { motion } from "framer-motion";
import ceoPhoto from "@/assets/david-foto-ceo.jpeg";

const CEOSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative inline-block mb-8"
          >
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-[3px] border-primary
                           shadow-gold relative z-10">
              <img
                src={ceoPhoto}
                alt="David Pinheiro - CEO Via Marca"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 scale-110 animate-pulse" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground mb-6 italic leading-relaxed"
          >
            "Nossas conquistas são do tamanho dos{" "}
            <span className="text-primary">nossos sonhos</span>..."
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-primary font-display text-lg md:text-xl tracking-wide"
          >
            David Pinheiro - CEO Via Marca
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CEOSection;
