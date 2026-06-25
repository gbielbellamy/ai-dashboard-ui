import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  delay?: number;
};

function AnimatedSection({ children, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedSection;