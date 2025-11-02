// components/QuickLinkCard.tsx
import { motion } from 'framer-motion';

export default function QuickLinkCard({ title, href }) {
  return (
    <motion.a 
      href={href} 
      className="p-4 bg-white rounded-lg shadow-md flex items-center space-x-2"
      whileHover={{ scale: 1.05, translateY: -4 }}
    >
      <h3 className="font-heading text-lg">{title}</h3>
    </motion.a>
  );
}

