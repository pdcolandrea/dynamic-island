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
        "grid justify-center w-full gap-4",
        isOpen
          ? "items-start grid-cols-[48px_1fr_12px]"
          : "items-center grid-cols-[12px_1fr_12px]"
      )}
    >
      {children}
    </motion.div>
  );
}
