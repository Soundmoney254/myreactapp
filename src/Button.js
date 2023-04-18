import React, { useState } from 'react';

function Button() {
    const [counter, setCounter] = useState(0);
    function alertClicked(){
        setCounter(counter + 1);
        alert(`You clicked this button ${counter + 1} times`)
    }
  return (
    <button onClick={alertClicked} id='button'> Click Me</button>
  )
}

export default Button;