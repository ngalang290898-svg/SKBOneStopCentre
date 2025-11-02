// components/Transition.tsx
'use client';
import { motion } from 'framer-motion';
export default function Transition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="min-h-full">
      {children}
    </motion.div>
  );
}
