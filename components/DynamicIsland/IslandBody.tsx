import classNames from "classnames";
import { motion } from "framer-motion";

interface IslandBodyProps {
  isOpen: boolean;
  onClick: () => void;
  children: React.ReactNode;
}
export default function IslandBody(props: IslandBodyProps) {
  const { isOpen, onClick, children } = props;

  const bodyVariants = {
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

  return (
    <motion.div
      className={classNames(
        "rounded-lg bg-black text-white text-xs grid cursor-pointer w-fit",
        isOpen ? "items-start p-6 grid-rows-3" : "items-center"
      )}
      animate={isOpen ? "open" : "closed"}
      variants={bodyVariants}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
