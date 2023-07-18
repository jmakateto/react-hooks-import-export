import React from 'react';
import Hogwarts from './components/Hogwarts';
import { gryffindorColors, hufflepuffColors } from './components/Houses';

function App() {
  return (
    <div>
      <Hogwarts />
      <p>Gryffindor colors: {gryffindorColors}</p>
      <p>Hufflepuff colors: {hufflepuffColors}</p>
    </div>
  );
}

export default App;
