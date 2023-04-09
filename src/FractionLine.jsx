import React, { useState } from "react";
import Draggable from "react-draggable";

function NumberLine() {
  const [numDivisions, setNumDivisions] = useState(3);
  const [arrowPosition, setArrowPosition] = useState(0);
  const [mode1, setMode1] = useState(true);
  

  function handleDoneClick() {
    if (mode1) {
    } else {

      // Switch back to mode 1 after checking answer

      setMode1(true);
    }
  }

  function getFraction(position, divisions) {
    const fraction = position / (divisions - 1);
    return `${fraction}/${divisions - 1}`;
  }

  function handleDrag(e, ui) {

    // Update arrow position

    setArrowPosition(ui.x);
  }

  return (
    <div>
      <div>
        <p style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          Mark 5/4 in below number line:
        </p>
        <div
          style={{

            // make a number line

            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "75%",
            height: "40px",
            borderBottom: "1px solid black",
            position: "relative",
            marginLeft: "10rem"
          }}
        >
          {Array(numDivisions)
            .fill()
            .map((_, i) => (
              <div
                key={i}
                style={{
                  width: "2px",
                  height: "20px",
                  borderLeft: "1px solid black",
                  position: "absolute",
                  left: `${(100 / (numDivisions - 1)) * i}%`,
                  marginBottom: "-3.8rem",
                }}
              />
            ))}
          
          {/* DRAGGABLE FEATURE */}

          <Draggable
            axis="x"
            bounds="parent"
            position={{ x: arrowPosition, y: 0 }}
            onDrag={handleDrag}
          >
            <div
              style={{

                // make an down arrow

                width: "0",
                height: "0",
                borderLeft: "10px solid transparent",
                borderRight: "10px solid transparent",
                borderTop: "10px solid black",
                position: "absolute",
              }}
            />
          </Draggable>
          <div
            style={{
              position: "absolute",
              top: "20px",
              left: arrowPosition,
              textAlign: "center",
              width: "40px",
            }}
          >
            {getFraction(arrowPosition, numDivisions)}
          </div>
        </div>
        <div style={{ marginTop: "3rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <label htmlFor="numDivisions">Number of Divisions:</label>
          <select
            id="numDivisions"
            value={numDivisions}
            onChange={(e) => setNumDivisions(parseInt(e.target.value))}
          >
            {/* POINTS */}

            <option value="2">2</option> 
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
          <button onClick={() => setArrowPosition(0)}>Reset</button>
</div>

        <div style={{ marginTop: "10px", display : "flex" , justifyContent: "center", alignItems : "center"}}>
          {mode1 ? null : <p>{getFraction(arrowPosition, numDivisions)}</p>}
          <button onClick={handleDoneClick}>
            {mode1 ? "Done" : "Check Answer"}
          </button>
        </div>
      </div>
      <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center", alignContent: "center" }}>
        
        {/* MODES */}

        <label htmlFor="mode1">Mode 1:</label>
        <input
          type="radio"
          id="mode1"
          name="mode"
          value="mode1"
          checked={mode1}
          onChange={() => setMode1(true)}
        />
        <label htmlFor="mode2">Mode 2:</label>
        <input
          type="radio"
          id="mode2"
          name="mode"
          value="mode2"
          checked={!mode1}
          onChange={() => setMode1(false)}
        />
      </div>
    </div>
  );
}
export default NumberLine;
