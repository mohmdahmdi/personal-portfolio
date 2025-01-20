"use client";

import { ExpandLess, ExpandMore } from "@mui/icons-material";
import React, { useState } from "react";
import CollapseComp from "./collapseComp";
import { motion, AnimatePresence } from "framer-motion";

const SideBarItem: React.FC<{
  href: string;
  name: string;
  icon?: any;
  collapsible?: boolean;
  data?: any;
}> = (props) => {
  const [collapse, setCollapse] = useState<boolean>(false);

  return (
    <div>
      <div className="p-2 mt-2 mr-3 flex items-center border-b border-black hover:border-neutral-900 transition-colors duration-300 ease-in-out justify-between">
        <a className="flex items-center" href={props.href}>
          {props.icon}
          <div className="ml-2">{props.name}</div>
        </a>
        <div>
          {props.collapsible ? (
            <button onClick={() => setCollapse(!collapse)}>
              {collapse ? <ExpandLess /> : <ExpandMore />}
            </button>
          ) : null}
        </div>
      </div>
      <AnimatePresence>
        {collapse && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <CollapseComp data={props.data} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SideBarItem;
