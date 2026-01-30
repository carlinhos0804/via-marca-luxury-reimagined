import { motion } from "framer-motion";
import imgPomada from "@/assets/pomada.jpg";
import imgShampooBarba from "@/assets/shampoo-barba.jpg";
import imgShampooCabelo from "@/assets/shampoo-cabelo.jpg";
import imgShampooCachos from "@/assets/shampoo-cachos.jpg";

const products = [
  {
    id: 1,
    name: "Pomada Modeladora Premium",
    description: "Fixação forte e brilho natural para penteados impecáveis.",
    image: imgPomada,
    category: "Finalização"
  },
  {
    id: 2,
    name: "Shampoo para Barba",
    description: "Limpeza profunda e hidratação para fios mais macios.",
    image: imgShampooBarba,
    category: "Cuidado com a Barba"
  },
  {
    id: 3,
    name: "Shampoo Premium Cabelo",
    description: "Fortalecimento e brilho para todos os tipos de cabelo.",
    image: imgShampooCabelo,
    category: "Cuidado Capilar"
  },
  {
    id: 4,
    name: "Ativador de Cachos",
    description: "Definição e controle de volume com tecnologia de ponta.",
    image: imgShampooCachos,
    category: "Especializados"
  }
];

const ProductGridSection = () => {
  return (
    <section id="produtos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Nossa Linha <span className="text-primary">Premium</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Produtos desenvolvidos com a mais alta tecnologia para entregar resultados de salão na sua barbearia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-secondary/30 rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="text-primary text-xs uppercase tracking-widest font-bold">
                  {product.category}
                </span>
                <h3 className="text-xl font-bold text-foreground mt-2 mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {product.description}
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
