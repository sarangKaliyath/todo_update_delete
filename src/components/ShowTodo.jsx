import React, { useState } from 'react';

export function ShowTodo({ list, setList, handleToggle, handleDelete }) {
  
    const [showUpdate, setShowUpdate] = useState(false);
    const [data, setData] = useState("");

    const handleChange = (el) => {
        setData(el.target.value);
        
    }

    const handleUpdate = (id) => {
        
        if (showUpdate) {
           let temp =  list.map((el) => 
               el.id === id ? { ...el, title: data } : el
               
            )
            setList(temp)
            
        }
        setShowUpdate(!showUpdate); 
        setData("")

    }


  
    return (
      <>
        {showUpdate ? (
          <input
            onChange={handleChange}
            value={data}
            type="text"
            placeholder="Update task"
          ></input>
        ) : (
          <></>
        )}

        {list.map((el) => {
          return (
            <div key={el.id}>
              <h3
                style={{
                  color: el.status ? "green" : "red",
                  textDecoration: el.status ? "line-through" : "none",
                }}
              >
                {el.title}
              </h3>
              <button
                onClick={() => {
                  handleDelete(el.id);
                }}
              >
                Delete
              </button>
              <button
                onClick={() => {
                  handleToggle(el.id);
                }}
              >
                Toggle
              </button>
              <button
                onClick={() => {
                  handleUpdate(el.id);
                }}
              >
                Update
              </button>
            </div>
          );
        })}
      </>
    );
}
