import classNames from "classnames";
import { useState } from "react";

interface DynamicIslandProps {
  isOpen: boolean;
}
export default function DynamicIsland(props: DynamicIslandProps) {
  const [isIslandOpen, setIslandOpen] = useState(false);

  const onIslandClicked = () => {
    setIslandOpen((isOpened) => !isOpened);
  };

  return (
    <div
      className={classNames(
        "rounded-lg bg-black text-white text-xs grid cursor-pointer w-fit",
        isIslandOpen ? "items-start" : "items-center"
      )}
      onClick={onIslandClicked}
    >
      <p>Island</p>
    </div>
  );
}
