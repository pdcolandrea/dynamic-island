import classNames from "classnames";
import { motion } from "framer-motion";
import { useState } from "react";
import AlbumArt from "./AlbumArt";
import InnerSongDetails from "./InnerSongDetails";
import IslandBody from "./IslandBody";
import IslandHeader from "./IslandHeader";
import MusicBar from "./MusicBar";

interface DynamicIslandProps {
  isOpen: boolean;
}
export default function DynamicIsland(props: DynamicIslandProps) {
  const [isIslandOpen, setIslandOpen] = useState(false);

  const onIslandClicked = () => {
    setIslandOpen((isOpened) => !isOpened);
  };

  return (
    <IslandBody isOpen={isIslandOpen} onClick={onIslandClicked}>
      <IslandHeader isOpen={isIslandOpen}>
        <AlbumArt isOpen={isIslandOpen} />

        <div>{isIslandOpen && <InnerSongDetails isOpen={isIslandOpen} />}</div>

        <motion.div
          className="w-3 h-3 grid justify-center items-center grid-cols-3 gap-1"
          animate={{ opacity: isIslandOpen ? [0, 1] : 1 }}
        >
          <MusicBar />
          <MusicBar />
          <MusicBar />
        </motion.div>
      </IslandHeader>
    </IslandBody>
  );
}
