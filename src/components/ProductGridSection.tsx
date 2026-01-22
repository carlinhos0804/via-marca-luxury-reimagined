import { motion } from "framer-motion";
import refPomada from "@/assets/ref-pomada.png";
import refOleo from "@/assets/ref-oleo.png";
import refLeavein from "@/assets/ref-leavein.png";
import refGel from "@/assets/ref-gel.png";

const products = [
  { src: refPomada, name: "Pomada" },
  { src: refOleo, name: "Óleo" },
  { src: refLeavein, name: "Leave-in" },
  { src: refGel, name: "Gel" },
];

const ProductGridSection = () => {
  return (
    <section className="py-20 md:py-28 bg-charcoal">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Seu Produto, <span className="text-primary">Sua Marca</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Personalize nossa linha completa de cosméticos com a identidade da sua barbearia
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-secondary rounded-xl p-6 overflow-hidden border border-primary/10
                            hover:border-primary/40 transition-all duration-300">
                <div className="aspect-square overflow-hidden rounded-lg mb-4">
                  <img
                    src={product.src}
                    alt={`${product.name} personalizado`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="text-center text-primary font-display text-lg md:text-xl font-semibold tracking-wider">
                  SUA MARCA AQUI
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGridSection;
