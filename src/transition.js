import { motion } from 'framer-motion';

const transition = (OgComponent) => {
  return () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <OgComponent />
    </motion.div>
  );
};

export default transition;
