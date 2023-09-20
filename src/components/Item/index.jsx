import React, { forwardRef } from "react";
import one from "../../assets/one.webp";
import two from "../../assets/two.webp";
import three from "../../assets/three.jpg";
import four from "../../assets/four.jpg";
import five from "../../assets/five.webp";
import six from "../../assets/six.jpg";
import seven from "../../assets/seven.jpg";
import eight from "../../assets/eight.webp";
import nine from "../../assets/nine.jpg";
import ten from "../../assets/ten.avif";
import eleven from "../../assets/eleven.avif";
import twelve from "../../assets/twelve.jpg";
import thirteen from "../../assets/thirteen.jpg";
import fourteen from "../../assets/fourteen.png";

const imgList = [
  {
    id: "1",
    path: one,
    name: "chaos",
  },
  {
    id: "2",
    path: two,
    name: "beth",
  },
  {
    id: "3",
    path: three,
    name: "rick making fun of morty",
  },
  {
    id: "4",
    path: four,
    name: "rick, morty and space monster",
  },
  {
    id: "5",
    path: five,
    name: "rick and morty on another planet",
  },
  {
    id: "6",
    path: six,
    name: "morty",
  },
  {
    id: "7",
    path: seven,
    name: "rick opening mortys eyes",
  },
  {
    id: "8",
    path: eight,
    name: "summer",
  },
  {
    id: "9",
    path: nine,
    name: "pickle rick",
  },
  {
    id: "10",
    path: ten,
    name: "jerry crying",
  },
  {
    id: "11",
    path: eleven,
    name: "morty in love",
  },
  {
    id: "12",
    path: twelve,
    name: "typical jerry",
  },
  {
    id: "13",
    path: thirteen,
    name: "morty having fun",
  },
  {
    id: "14",
    path: fourteen,
    name: "granpa rickkk",
  },
];

const Item = forwardRef(
  ({ id, withOpacity, isDragging, style, ...props }, ref) => {
    const matchingImage = imgList.find((item) => item.name == id);

    const inlineStyles = {
      opacity: withOpacity ? "0.5" : "1",
      transformOrigin: "50% 50%",
      height: "320px",
      width: "100%",
      cursor: isDragging ? "grabbing" : "grab",
      backgroundColor: "#ffffff",
      transform: isDragging ? "scale(1.05)" : "scale(1)",
      ...style,
    };

    return (
      <div ref={ref} style={inlineStyles} {...props}>
        <div className=" h-full w-full ">
          {matchingImage && (
            <>
              <img
                src={matchingImage.path}
                alt=""
                className=" h-[250px] w-full object-cover rounded-lg"
              />
              <div className=" bg-black w-auto rounded-2xl mt-2 px-4 py-2 text-white">
                {matchingImage.name}
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
);

export default Item;
