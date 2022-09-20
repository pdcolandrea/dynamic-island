import classNames from "classnames";
import { motion } from "framer-motion";

interface IslandHeaderProps {
  isOpen: boolean;
}

export default function AlbumArt(props: IslandHeaderProps) {
  const { isOpen } = props;

  const imgVariants = {
    open: {
      width: "48px",
      height: "48px",
      borderRadius: "12px",
    },
    closed: {
      width: "12px",
      height: "12px",
      borderRadius: "4px",
    },
  };

  return (
    <motion.img
      className={classNames("w-3 h-3 rounded object-cover")}
      animate={isOpen ? "open" : "closed"}
      variants={imgVariants}
      src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    />
  );
}
