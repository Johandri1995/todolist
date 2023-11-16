import React from 'react';
import './style.css';
import { useState } from 'react';

export default function App() {
  const [cite, setCite] = useState();
  const [elemento, setElemento] = useState([]);

  const handelChange = (event) => {
    setCite(event.target.value);
  };

  const addCities = () => {
    setElemento([...elemento, cite]);
    setCite('');
  };

  const handelRemove = (indice) => {
    console.log(elemento);
    console.log(indice);

    setElemento((next) => {
      {
        return next.filter((e, i) => i !== indice);
      }
    });
  };

  return (
    <div className="App">
      <input type="text" onChange={handelChange} value={cite}></input>
      <button onClick={addCities}>Add</button>
      <ul>
        {elemento.map((e, indice) => {
          return (
            <li>
              {e}
              <button
                onClick={() => {
                  handelRemove(indice);
                }}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
