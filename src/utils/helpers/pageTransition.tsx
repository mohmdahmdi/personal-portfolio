"use client";

import { motion } from "framer-motion";

const Transition = ({ children }: { children: React.ReactNode }) => {
  return <motion.div initial={{scale:0.9}} animate={{scale:1}} transition={{delay:0.5, type:"twin"}}>{children}</motion.div>;
};

export default Transition;
