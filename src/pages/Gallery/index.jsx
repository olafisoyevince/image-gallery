import React, { useState } from "react";
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
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Gallery = () => {
  const imgList = [
    {
      id: "1",
      path: one,
    },
    {
      id: "2",
      path: two,
    },
    {
      id: "3",
      path: three,
    },
    {
      id: "4",
      path: four,
    },
    {
      id: "5",
      path: five,
    },
    {
      id: "6",
      path: six,
    },
    {
      id: "7",
      path: seven,
    },
    {
      id: "8",
      path: eight,
    },
    {
      id: "9",
      path: nine,
    },
    {
      id: "10",
      path: ten,
    },
    {
      id: "11",
      path: eleven,
    },
    {
      id: "12",
      path: twelve,
    },
  ];

  const [items, setItems] = useState(imgList);

  const onDragEnd = (result) => {
    if (!result.destination) {
      // Dragged outside of the list
      return;
    }

    const reorderedItems = [...items];
    const [removed] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, removed);

    setItems(reorderedItems);
  };

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="characters">
          {(provided) => (
            <ul
              {...provided.droppableProps}
              ref={provided.innerRef}
              className=" w-full flex flex-wrap gap-8 justify-center"
            >
              {items.map(({ id, path }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <li
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        className=" w-[300px] h-[300px]"
                      >
                        <img
                          src={path}
                          alt=""
                          className=" object-cover h-full w-full"
                        />
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Gallery;
