import scenario1 from './gameData/scenario1.json';
import { useState, useEffect } from "react";
import {TextboxSpeech} from './TextboxStyle';

function Textbox({ selectedPerson, selectedOption, selectedDetail }) {
    const [text, setText] = useState("");
    const [position, setPosition] = useState(0);

    useEffect(() => {
        setText(scenario1[selectedPerson][selectedOption][selectedDetail]);
    }, []);
    
    return (
        <TextboxSpeech>
            <p>{text}</p>
        </TextboxSpeech>
    );
}

export default Textbox;
