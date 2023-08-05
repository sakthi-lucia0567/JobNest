import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function Board() {
  const initialData = {
    todo: ["Task 1", "Task 2", "Task 3"],
    pending: ["Task 4", "Task 5"],
    done: ["Task 6"],
  };
  const [boardData, setBoardData] = useState(initialData);

  const handleDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const items = Array.from(initialData[source.droppableId]);
      const [reorderedItem] = items.splice(source.index, 1);
      items.splice(destination.index, 0, reorderedItem);

      const newState = {
        ...initialData,
        [source.droppableId]: items,
      };

      setBoardData(newState);
    } else {
      const sourceItems = Array.from(initialData[source.droppableId]);
      const destinationItems = Array.from(initialData[destination.droppableId]);
      const [movedItem] = sourceItems.splice(source.index, 1);
      destinationItems.splice(destination.index, 0, movedItem);

      const newState = {
        ...initialData,
        [source.droppableId]: sourceItems,
        [destination.droppableId]: destinationItems,
      };

      setBoardData(newState);
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="flex">
        <div className="flex-1 p-4">
          <h2 className="mb-4 text-xl font-bold">Todo</h2>
          <Droppable droppableId="todo">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="bg-gray-200 p-2 rounded"
              >
                {boardData.todo.map((item, index) => (
                  <Draggable key={item} draggableId={item} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="bg-white p-2 mb-2 rounded"
                      >
                        {item}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
        <div className="flex-1 p-4">
          <h2 className="mb-4 text-xl font-bold">Pending</h2>
          <Droppable droppableId="pending">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="bg-gray-200 p-2 rounded"
              >
                {boardData.pending.map((item, index) => (
                  <Draggable key={item} draggableId={item} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="bg-white p-2 mb-2 rounded"
                      >
                        {item}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
        <div className="flex-1 p-4">
          <h2 className="mb-4 text-xl font-bold">Done</h2>
          <Droppable droppableId="done">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="bg-gray-200 p-2 rounded"
              >
                {boardData.done.map((item, index) => (
                  <Draggable key={item} draggableId={item} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="bg-white p-2 mb-2 rounded"
                      >
                        {item}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </div>
    </DragDropContext>
  );
}

export default Board;
