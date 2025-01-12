import React, { useState } from 'react';

function Counter() {
  const [visible, setVisible] = useState(true);

  const toggleBackground = () => {
    if (visible) {
      document.body.classList.remove('background-two');
      document.body.classList.add('background-one');
    } else {
      document.body.classList.remove('background-one');
      document.body.classList.add('background-two');
    }
  };

  React.useEffect(() => {
    document.body.classList.add('background-one');
  }, []);

  return (
    <div className="card">
      <h1>Toggle</h1>
      <button 
        className="toggle"
        onClick={() => {
          setVisible(!visible);
          toggleBackground();
        }}
      >
        Toggle Here
      </button>
      <p className={visible ? 'visible' : 'hidden'}>
        Lorem ipsum dolor sit amet consectetur.
      </p>
    </div>
  );
}

export default Counter;


