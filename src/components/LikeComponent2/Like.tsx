import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
    onClick();
  };
  if (isLiked) return <FaHeart onClick={handleClick} />;
  return <FaRegHeart onClick={handleClick} />;
};

export default Like;
