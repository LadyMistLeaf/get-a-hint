import { useState } from "react";
import './App.css';
import People from './components/People';
import Header from './components/Header';
import Options from './components/Options';
import reactDom from 'react-dom';

function App() {
  const [selectedPerson, setSelectedPerson] = useState("null");

  return (
    <div className="App">
      <Header />
      <People />
      <Options />
    </div>
  );
}

export default App;