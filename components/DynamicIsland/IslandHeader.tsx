import classNames from "classnames";
import { motion } from "framer-motion";

interface IslandHeaderProps {
  isOpen: boolean;
  children: React.ReactNode;
}

export default function IslandHeader(props: IslandHeaderProps) {
  const { isOpen, children } = props;
  return (
    <motion.div
      className={classNames(
        "grid grid-cols-3 justify-center w-full",
        isOpen ? "items-start" : "items-center"
      )}
    >
      {children}
    </motion.div>
  );
}
