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
      <div>
        <h2
          onClick={clicked}
          style={{
            color: ans
              ? "hsl(var(--text-darker-grayish-blue))"
              : "hsl(var(--text-dark-grayish-blue))",
            fontWeight: ans ? "var(--fw-large)" : "var(--fw-small)",
          }}
        >
          {props.question}
        </h2>
        <div
          className="spin"
          style={{ transform: ans ? "rotate(180deg)" : "none" }}
        ></div>
      </div>

      {ans && <p>{props.answers}</p>}
    </div>
  );
}

export default ToDisplay;
