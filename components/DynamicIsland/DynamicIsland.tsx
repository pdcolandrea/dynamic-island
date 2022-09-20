import classNames from "classnames";
import { motion } from "framer-motion";
import { useState } from "react";

interface DynamicIslandProps {
  isOpen: boolean;
}
export default function DynamicIsland(props: DynamicIslandProps) {
  const [isIslandOpen, setIslandOpen] = useState(false);
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

  const onIslandClicked = () => {
    setIslandOpen((isOpened) => !isOpened);
  };

  return (
    <motion.div
      className={classNames(
        "rounded-lg bg-black text-white text-xs grid cursor-pointer w-fit",
        isIslandOpen ? "items-start p-6 grid-rows-3" : "items-center"
      )}
      animate={isIslandOpen ? "open" : "closed"}
      variants={bodyVariants}
      onClick={onIslandClicked}
    >
      <motion.div
        className={classNames(
          "grid grid-cols-3 justify-center w-full",
          isIslandOpen ? "items-start" : "items-center"
        )}
      >
        <motion.img
          className={classNames("w-3 h-3 rounded object-cover")}
          animate={isIslandOpen ? "open" : "closed"}
          variants={imgVariants}
          src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        />
        <div>
          {isIslandOpen && (
            <motion.div
              className="grid justify-center items-center grid-rows-2 grid-cols-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-base font-bold text-white">Song Name</div>
              <div className="text-base font-extralight text-white">
                Artist Name
              </div>
            </motion.div>
          )}
        </div>

        <motion.div></motion.div>
      </motion.div>
    </motion.div>
  );
}
