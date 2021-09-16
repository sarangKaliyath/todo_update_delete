import React, { useState } from "react";
import { ShowTodo } from "./ShowTodo";
import { nanoid } from "nanoid";
export function Todos() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [doneList, setDoneList] = useState([]);
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = (e) => {
    const payload = { status: false, title: text, id: nanoid(3) };
    setList([...list, payload]);
    setText("");
  };

  const handleDelete = (id) => {
    let temp = list.filter((el) => {
      return el.id !== id;
    });

    setList(temp);
  };

  const handleToggle = (id) => {
    const newList = list.map((el) =>
      el.id === id ? { ...el, status: !el.status } : el
    );
    setList(newList);
  };

  const handleDone = () => {
    let temp = list.filter((el) => {
      return el.status === true;
    });
    setDoneList(temp);
    setShow(!show);
  };

  return (
    <div>
      <div>
        <h1>Todo</h1>
        <input
          value={text}
          onChange={handleChange}
          type="text"
          placeholder="Enter Task"
        />
        <button onClick={handleClick}>Add Task</button>
        <button onClick={handleDone}>
          {show ? "Show All" : "Show Completed"}{" "}
        </button>
      </div>
      <div>
        {show ? (
          <ShowTodo
            list={doneList}
            setList={setList}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        ) : (
          <ShowTodo
            list={list}
            setList={setList}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        )}
      </div>
    </div>
  );
}
