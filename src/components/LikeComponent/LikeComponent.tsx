import React from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";

interface Props {
  onClick: () => void;
}

const LikeComponent = ({ onClick }: Props) => {
  let [isLiked, setIsLiked] = useState(false);
  const handleClick = () => {
    setIsLiked(!isLiked);
    onClick();
  };
  if (isLiked) return <FaHeart onClick={handleClick} />;
  return <FaRegHeart onClick={handleClick} />;
};

export default LikeComponent;
