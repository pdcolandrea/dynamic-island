import { motion } from "framer-motion";

interface IslandHeaderProps {
  isOpen: boolean;
}

export default function InnerSongDetails(props: IslandHeaderProps) {
  return (
    <motion.div
      className="grid justify-center items-center gap-1 grid-cols-1 grid-rows-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="text-base font-bold text-white">Song Name</div>
      <div className="text-base font-extralight text-white">Artist Name</div>
    </motion.div>
  );
}
