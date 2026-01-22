import { motion } from "framer-motion";

const advantages = [
  { 
    text: "Vantagens de ter a sua própria linha", 
    bgClass: "bg-block-teal",
    textClass: "text-white",
    size: "col-span-2 md:col-span-1"
  },
  { 
    text: "Grande aumento de receitas", 
    bgClass: "bg-block-orange",
    textClass: "text-white",
    size: "col-span-1"
  },
  { 
    text: "Presença de sua marca junto ao dia a dia do cliente", 
    bgClass: "bg-block-lightGray",
    textClass: "text-gray-900",
    size: "col-span-1"
  },
  { 
    text: "Maior valor agregado ao seu negócio", 
    bgClass: "bg-block-magenta",
    textClass: "text-white",
    size: "col-span-1"
  },
  { 
    text: "Aumento da fidelização de seus clientes", 
    bgClass: "bg-block-red",
    textClass: "text-white",
    size: "col-span-1"
  },
  { 
    text: "Expansão da marca para fora da Barbearia", 
    bgClass: "bg-block-whiteGray",
    textClass: "text-gray-900",
    size: "col-span-1"
  },
  { 
    text: "Diferencial em relação aos concorrentes", 
    bgClass: "bg-block-purple",
    textClass: "text-white",
    size: "col-span-2 md:col-span-1"
  },
];

const AdvantagesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Por que ter sua <span className="text-primary">marca própria</span>?
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className={`${advantage.size} ${advantage.bgClass} ${advantage.textClass} 
                         p-6 md:p-8 rounded-xl flex items-center justify-center text-center
                         font-body font-semibold text-sm md:text-base transition-all duration-300
                         hover:shadow-lg cursor-default min-h-[120px] md:min-h-[140px]`}
            >
              <span>{advantage.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
