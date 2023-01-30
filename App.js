import React from "react";
import { useState } from "react";
import useList from "./Components/UseList";
import './App.css';

export default function App() {
  const { list, push, pull } = useList();
  const [todo, setTodo] = useState("");
  const [warn, setWarn] = useState("");
  const onsubmithandler = (event) => {
    event.preventDefault();
    if(todo == ""){
      setWarn("Please type something to add");
    }
    else{
      setWarn("")
    push(todo);
    setTodo("");
    }
  };
  return (
      <div>
          <form onSubmit={(event) => { onsubmithandler(event); }}>
            <label className = "lbl">Add Todo item</label>
            <input
              type="text"
              onChange={(e) => {
                setTodo(e.target.value);
              }}
              value={todo}
            />
            <button type="submit" className = "button-5">Add Todo</button>
          </form>
          <div className = "warn">
            {warn}
          </div>
          <div>
            {list.map((listItem, listIndex) => {
              return (
                <div className = "todos">
                  <span key={listIndex} className = "txt">{listItem}</span>
                  <button className = "button-24"
                    onClick={() => {
                      pull(listIndex);
                    }}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
      </div>
  );
}
