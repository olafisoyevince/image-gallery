import React, { useState, useCallback } from "react";
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  DragOverlay,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import SortableItem from "../../components/SortableItem";
import Item from "../../components/Item";
import { Heading } from "@chakra-ui/react";

const Gallery = () => {
  const [items, setItems] = useState([
    "chaos",
    "beth",
    "morty",
    "morty having fun",
    "summer",
    "typical jerry",
    "rick making fun of morty",
    "pickle rick",
    "morty in love",
    "rick opening mortys eyes",
    "granpa rickkk",
    "rick, morty and space monster",
    "rick and morty on another planet",
    "jerry crying",
  ]);

  const [activeId, setActiveId] = useState(null);
  const [searchString, setSearchString] = useState("");

  const handleChange = (event) => {
    event.preventDefault();

    setSearchString(event.target.value.toLocaleLowerCase());
  };

  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const handleDragStart = useCallback((event) => {
    setActiveId(event.active.id);
  }, []);

  const handleDragEnd = useCallback((event) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }

    setActiveId(null);
  }, []);

  const handleDragCancel = useCallback(() => {
    setActiveId(null);
  }, []);

  return (
    <div className=" mb-10">
      <Heading className="text-center mt-5">Drag'n'Drop</Heading>

      <div className=" flex justify-center h-9 gap-5 m-auto w-[full] mb-6 mt-10">
        <input
          type="text"
          className=" border border-black h-9 rounded-md pl-3 w-[280px] sm:w-[375px]"
          onChange={handleChange}
          value={searchString}
          placeholder="Search"
        />
      </div>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
      >
        <SortableContext items={items} strategy={rectSortingStrategy}>
          <div className=" m-auto w-[280px] sm:w-[375px] md:w-[700px] xl:w-[1000px] grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-12">
            {items
              .filter((val) => {
                if (searchString == "") {
                  return val;
                } else if (
                  val
                    .toLocaleLowerCase()
                    .includes(searchString.toLocaleLowerCase())
                ) {
                  return val;
                }
              })
              .map((id) => (
                <SortableItem key={id} id={id} />
              ))}
          </div>
        </SortableContext>

        <DragOverlay adjustScale style={{ transformOrigin: "0 0" }}>
          {activeId ? <Item id={activeId} isDragging /> : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
};

export default Gallery;
