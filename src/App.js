import React, { useRef } from "react";

export default () => {
  const ref = useRef(null);
  
  return (
      <dialog
    open
    ref={ref}
      >
      <p>Greetings, one and all!</p>
      <form method="dialog">
      <button onClick={() => ref.current.close()}>Close</button>
      </form>
      </dialog>
  );
};
