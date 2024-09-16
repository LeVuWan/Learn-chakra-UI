import React from "react";
import { BiTime } from "react-icons/bi";

const MovieCard = ({ movie }) => {
  const { src, title, runtime, main } = movie;

  return (
    <div className="bg-primary rounded-md shadow-md shadow-primary relative overflow-hidden">
      <img src={src} alt="" className="w-full" />
      <div className="p-4 text-white">
        <h4 className="text-2xl">{title}</h4>
        <p>{main}</p>
      </div>
      <div className="flex justify-between items-center bg-cyan-50 rounded-md absolute top-2 left-2 p-2 min-w-[25%]">
        <BiTime />
        <p>{runtime}</p>
      </div>
    </div>
  );
};

export default MovieCard;
