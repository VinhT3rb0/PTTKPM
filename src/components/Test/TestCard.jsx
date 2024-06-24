import React, { useState } from 'react';

const Component1 = () => {
  return <div>Component 1</div>;
};

const Component2 = () => {
  return <div>Component 2</div>;
};

const Component3 = () => {
  return <div>Component 3</div>;
};

const Component4 = () => {
  return <div>Component 4</div>;
};

const App = () => {
  const [currentComponent, setCurrentComponent] = useState(Component1);

  const handleButtonClick = (component) => {
    setCurrentComponent(component);
  };

  return (
    <div>
      <button onClick={() => handleButtonClick(<Component1 />)}>1</button>
      <button onClick={() => handleButtonClick(<Component2 />)}>2</button>
      <button onClick={() => handleButtonClick(<Component3 />)}>3</button>
      <button onClick={() => handleButtonClick(<Component4 />)}>4</button>

      <div style={{ marginTop: '20px' }}>
        <h2>Giao diện hiện tại:</h2>
        {currentComponent}
      </div>
    </div>
  );
};

export default App;
