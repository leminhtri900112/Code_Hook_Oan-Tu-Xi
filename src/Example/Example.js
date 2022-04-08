import React, { useEffect, useState } from "react";

export default function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count);
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button>Click me</button>
    </div>
  );
}
