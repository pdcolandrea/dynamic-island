import classNames from "classnames";
import { motion } from "framer-motion";
import { useState } from "react";
import AlbumArt from "./AlbumArt";
import ControlsWrapper from "./ControlsWrapper";
import InnerSongDetails from "./InnerSongDetails";
import IslandBody from "./IslandBody";
import IslandHeader from "./IslandHeader";
import Playbar from "./Playbar";

export default function DynamicIsland() {
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
          <motion.div
            initial={{ height: "0" }}
            animate={{ height: "100%" }}
            transition={{ duration: 1, delay: 0.5, repeat: Infinity }}
            className="w-full h-full rounded-sm bg-gradient-to-r from-applePurp to-applePurpAlt"
          />
          <motion.div
            initial={{ height: "0" }}
            animate={{ height: "100%" }}
            transition={{ duration: 1, delay: 0.75, repeat: Infinity }}
            className="w-full h-full rounded-sm bg-gradient-to-r from-applePurp to-applePurpAlt"
          />
          <motion.div
            initial={{ height: "0" }}
            animate={{ height: "75%" }}
            transition={{ duration: 1, delay: 0.3, repeat: Infinity }}
            className="w-full h-full rounded-sm bg-gradient-to-r from-applePurp to-applePurpAlt"
          />
        </motion.div>
      </IslandHeader>

      {isIslandOpen && (
        <>
          <ControlsWrapper>
            <span>2:30</span>
            <Playbar />
            <span>-1:35</span>
          </ControlsWrapper>
        </>
      )}
    </IslandBody>
  );
}
