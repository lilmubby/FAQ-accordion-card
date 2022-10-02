import { useState } from "react";
function ToDisplay(props) {
  const [ans, setAns] = useState(false);

  function clicked() {
    setAns((prev) => {
      return !prev;
    });
  }

  return (
    <div className="items">
      <h2
        onClick={clicked}
        style={{
          color: clicked
            ? "hsl(var(--text-darker-grayish-blue))"
            : "hsl(var(--text-dark-grayish-blue))",
        }}
      >
        {props.question}
      </h2>

      {ans && <p>{props.answers}</p>}
    </div>
  );
}

export default ToDisplay;
