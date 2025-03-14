import React, { useRef, useState } from "react";
import { Button } from "react-bootstrap";

function REFhook() {
  const [count1, setCount] = useState(0);
  const count2 = useRef(0);

  return (
    <div>
      <h1>useState: {count1}</h1>
      <h1>useRef: {count2.current}</h1>
      
      <Button variant="success" onClick={() => setCount(count1 + 1)}>useState</Button>
      <br /><br />
      
      <Button variant="success" onClick={() => { 
        count2.current += 1; 
      }}>
        useRef
      </Button>
    </div>
  );
}

export default REFhook;
