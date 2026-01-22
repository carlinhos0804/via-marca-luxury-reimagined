import { motion } from "framer-motion";
import barbeiroShampoo from "@/assets/barbeiro-aplicando-shampoo-barba.png";
import barbeiroPomada from "@/assets/barbeiro-aplicando-pomada.jpeg";
import barbeiroOferecendo from "@/assets/barbeiro-oferecendo-shampoo.png";

const images = [
  {
    src: barbeiroShampoo,
    alt: "Barbeiro aplicando shampoo na barba do cliente",
  },
  {
    src: barbeiroPomada,
    alt: "Barbeiro aplicando pomada no cabelo do cliente",
  },
  {
    src: barbeiroOferecendo,
    alt: "Barbeiro oferecendo shampoo ao cliente",
  },
];

const ProductInActionSection = () => {
  return (
    <section className="py-20 md:py-28 bg-soft-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Seu Produto <span className="text-primary">em Ação</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Veja como sua marca se integra perfeitamente ao dia a dia da barbearia
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-xl border border-primary/20">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductInActionSection;
