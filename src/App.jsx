import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import {
  Container,
  TodoWrapper,
  TodoTitle,
  TodoMessage,
  TodoMessageH2,
} from "./styles/TodoStyled.js";

//  message component
const AddItem = () => {
  return (
    <TodoMessage>
      <TodoMessageH2>Please add an item...</TodoMessageH2>
    </TodoMessage>
  );
};


const SAVED_ITEMS = "savedItems";

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
    if (savedItems) {
      setItems(savedItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(items));
  }, [items]);

  //  add items in the list when created
  const onAddItem = (text) => {
    const textItem = new TodoItem(text);

    setItems([textItem, ...items]);
  };

  // delete an item from the list
  const onItemDeleted = (item) => {
    const filteredItem = items.filter((i) => item.id !== i.id);
    if (window.confirm("Are you sure?")) {
      setItems(filteredItem);
    }
  };

  // set an to 'done' when clicked on the icon
  const onDone = (item) => {
    const updatedItems = items.map((i) => {
      if (i.id === item.id) {
        i.done = !i.done;
      }
      return i;
    });
    setItems(updatedItems);
  };

  return (
    <Container className="fade-in-image">
      <TodoWrapper>
        <TodoTitle>My Todo Tasks</TodoTitle>
        <TodoForm onAddItem={onAddItem} />

        {items.length === 0 ? (
          <AddItem />
        ) : (
          <TodoList
            onItemDeleted={onItemDeleted}
            items={items}
            setItems={setItems}
            onDone={onDone}
          />
        )}
      </TodoWrapper>
    </Container>
  );
};

export default App;
