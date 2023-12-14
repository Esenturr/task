import React, { useState } from "react";

function Task2() {
  const [isTrue, setIsTrue] = useState(true);

  return (
    <div>
      {isTrue ? (
        <p>Это отображается при true</p>
      ) : (
        <p>Это отображается при false</p>
      )}

      <button onClick={() => setIsTrue(!isTrue)}>
        Изменить переменную (true/false)
      </button>
    </div>
  );
}

export default Task2;
