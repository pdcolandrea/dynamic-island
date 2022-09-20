import classNames from "classnames";
import { motion } from "framer-motion";
import { useState } from "react";

interface DynamicIslandProps {
  isOpen: boolean;
}
export default function DynamicIsland(props: DynamicIslandProps) {
  const [isIslandOpen, setIslandOpen] = useState(false);
  const variants = {
    open: {
      width: "300px",
      height: "auto",
      borderRadius: "20px",
    },
    closed: {
      width: "96px",
      height: "12px",
      borderRadius: "99px",
    },
  };

  const onIslandClicked = () => {
    setIslandOpen((isOpened) => !isOpened);
  };

  return (
    <motion.div
      className={classNames(
        "rounded-lg bg-black text-white text-xs grid cursor-pointer w-fit",
        isIslandOpen ? "items-start" : "items-center"
      )}
      animate={isIslandOpen ? "open" : "closed"}
      variants={variants}
      onClick={onIslandClicked}
    >
      <p>Island {isIslandOpen}</p>
    </motion.div>
  );
}
