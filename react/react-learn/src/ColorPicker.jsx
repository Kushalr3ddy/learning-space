import React, { useState } from "react";

function ColorPicker(){

    function handleColorChange(){
        setColor(event.target.value);
    }

    const [color, setColor] = useState("#ffffff");
    return(
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor: color}}>
                <p>Selected Color:</p>
            </div>
            <label>Select a Color:</label>
            <input type="color" value={color} onChange={handleColorChange}/>
        </div>
    );
}

export default ColorPicker;