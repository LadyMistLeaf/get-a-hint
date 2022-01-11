import { useState } from "react";
import './App.css';
import People from './components/People';
import Header from './components/Header';
import Options from './components/Options';
import Details from './components/Details';
import Textbox from './components/Textbox';

function App() {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedDetail, setSelectedDetail] = useState(null);

  const handlePersonChange = (person) => {
    setSelectedOption(null);
    setSelectedPerson(person);
  }

  const handleOptionChange = (option) => {
    setSelectedDetail(null);
    setSelectedOption(option);
  }

  const handleDetailChange = (detail) => {
    setSelectedDetail(detail);
  }

  return (
    <div className="App">
      <Header />
      <People onPersonChange={handlePersonChange} onOptionChange={handleOptionChange} onDetailChange={handleDetailChange}/>
      {selectedPerson !== null &&
        <Options selectedPerson={selectedPerson} selectedOption={selectedOption} onOptionChange={handleOptionChange}/>
      }
      {selectedOption !== null &&
        <Details selectedPerson={selectedPerson} selectedOption={selectedOption} onDetailChange={handleDetailChange}/>
      }
      {selectedDetail !== null &&
        <Textbox selectedPerson={selectedPerson} selectedOption={selectedOption} selectedDetail={selectedDetail}/>
      }
    </div>
  );
}

export default App;