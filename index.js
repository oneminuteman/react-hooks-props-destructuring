
import React from 'react';

function Person({ name = "Stranger" }) {
  return <div>Hello, {name}!</div>;
}

// example usage
function App() {
  return (
    <div>
      <Person />
      <Person name="Alice" />
    </div>
  );
}
