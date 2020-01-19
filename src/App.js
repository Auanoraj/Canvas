import React, { useEffect, useRef, useState } from 'react';
import './App.css';


function App() {

  const canvasInput = useRef(null);

  const [ xCoordinateInput, setXcoordinateInput ] = useState(null);
  const [ yCoordinateInput, setYcoordinateInput ] = useState(null);
  const [ widthInput, setWidthInput ] = useState(null);
  const [ heightInput, setHeightInput ] = useState(null);

  const height = 370;
  const width = 550;

  useEffect(() => {
    const canvas = canvasInput.current;
    const ctx = canvas.getContext("2d");

    ctx.beginPath();
    clearCanvas();

    if ((!!xCoordinateInput && !!yCoordinateInput && !!widthInput && !!heightInput) || xCoordinateInput === 0 || yCoordinateInput === 0) {

      if ((xCoordinateInput + widthInput) >= width) setWidthInput(width - xCoordinateInput);
      if ((yCoordinateInput + heightInput) >= height) setHeightInput(height - yCoordinateInput);

      ctx.strokeRect(xCoordinateInput, yCoordinateInput, widthInput, heightInput)

    }

  }, [xCoordinateInput, yCoordinateInput, widthInput, heightInput]) 

  const clearCanvas = () => {
    const canvas = canvasInput.current;
    const ctx = canvas.getContext("2d");
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p className="Header-logo">
          RECT<span>{"["}</span>&#9635;<span>{"]"}</span>ANGLE
        </p>
      </header>
      <main>
        <section>
          <h3>INPUT</h3>
          <label>
            X Coordinate
            <input 
              type="number" 
              name="x-coordinate" 
              value={!!xCoordinateInput || xCoordinateInput === 0 ? xCoordinateInput : ""}
              onChange={(e) => {
                const val = parseInt(e.target.value);
                clearCanvas()
                if (val > width) setXcoordinateInput(0);
                else setXcoordinateInput(val);
              }}
            />
          </label>
          <label>
            Y Coordinate
            <input 
              type="number" 
              name="y-coordinate" 
              value={!!yCoordinateInput || yCoordinateInput === 0 ? yCoordinateInput : ""}
              onChange={(e) => {
                const val = parseInt(e.target.value);
                clearCanvas()
                if (val > height) setYcoordinateInput(0);
                else setYcoordinateInput(val);
              }}
            />
          </label>
          <label>
            Width
            <input 
              type="number" 
              name="width" 
              value={!!widthInput ? widthInput : ""}
              onChange={(e) => {
                const val = parseInt(e.target.value);
                clearCanvas()
                if (val > width) setWidthInput(width)
                else setWidthInput(val)
              }}
            />
          </label>
          <label>
            Height
            <input 
              type="number" 
              name="height" 
              value={!!heightInput ? heightInput : ""}
              onChange={(e) => {
                const val = parseInt(e.target.value);
                clearCanvas()
                if (val > height) setHeightInput(height)
                else setHeightInput(val)
              }}
            />
          </label>
        </section>
        <section>
          <h3>PREVIEW</h3>
          <canvas 
            ref={canvasInput} 
            width={width} 
            height={height} 
            style={{ "boxShadow": "0 4px 8px 0 rgba(0,0,0,0.2)", "border": "1px solid #C0C0C0" }}
          />
        </section>
      </main>
      <footer>
        Copyright &copy; 2020 <a href="https://github.com/auanoraj" target="_blank">Auanoraj</a>
      </footer>
    </div>
  );
}

export default App;