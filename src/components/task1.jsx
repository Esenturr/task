import React, { useState } from "react";

function Task1() {
  const [text, setText] = useState("Привет, мир!");

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <p>{text}</p>

      <input type="text" value={text} onChange={handleInputChange} />
    </div>
  );
}
export default Task1;
