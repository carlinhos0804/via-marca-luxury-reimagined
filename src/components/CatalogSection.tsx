import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/5531998971100?text=Olá%2C%20estava%20no%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos";

const catalogItems = [
  {
    category: "Pomadas",
    items: ["100g e 150g", "Teia, Brilho, Matte, Dry, Black"],
  },
  {
    category: "Shampoos e Condicionadores",
    items: ["200ml"],
  },
  {
    category: "Shampoo de Barba",
    items: ["200ml"],
  },
  {
    category: "Óleo de Barba",
    items: ["30ml"],
  },
  {
    category: "Forthair",
    items: ["60ml"],
  },
  {
    category: "Géis",
    items: ["300g - Transparente e Black"],
  },
  {
    category: "Leave-in e Cremes Finalizadores",
    items: ["Diversas opções"],
  },
];

const CatalogSection = () => {
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
         <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
  LINHA DE <span className="text-primary">PRODUTOS</span>
</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Uma linha completa de cosméticos premium para sua barbearia
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {catalogItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-secondary border border-primary/20 rounded-xl p-6 hover:border-primary/50 
                        transition-all duration-300 hover:shadow-gold"
            >
              <h3 className="font-display text-xl text-primary mb-3 font-semibold">
                {item.category}
              </h3>
              <ul className="space-y-1">
                {item.items.map((subItem, subIndex) => (
                  <li key={subIndex} className="text-muted-foreground font-body text-sm">
                    • {subItem}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <motion.a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-4 bg-primary text-primary-foreground font-bold 
                       text-lg rounded-lg shadow-gold hover:bg-gold-light transition-all duration-300
                       tracking-wide font-body uppercase"
          >
            Solicitar Catálogo Completo
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CatalogSection;
