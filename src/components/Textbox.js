import scenario1 from "./gameData/scenario1.json";
import { useState, useEffect } from "react";
import { TextboxSpeech } from "./TextboxStyle";

// TODO: add sound effect when adding a letter.
// NOTE: Find good sound effect

function Textbox({ selectedPerson, selectedOption, selectedDetail }) {
    const [text, setText] = useState(""); // What completed text will look like
    const [displayedText, setDisplayedText] = useState(""); // Gradual addition of the text
    const [position, setPosition] = useState(0); // What position in the text we are at in displayText
    const [timer, setTimer] = useState(null);

    useEffect(() => {
        setText(scenario1[selectedPerson][selectedOption][selectedDetail]);
        clearTimeout(timer);
        setDisplayedText("");
        setPosition(0);
    }, [selectedDetail]);

    useEffect(() => {
        setTimer(
            setTimeout(() => {
                if (position === 0 && text !== "") {
                    setDisplayedText(text[position]);
                    setPosition(position + 1);
                } else if (position < text.length) {
                    setDisplayedText(displayedText + text[position]);
                    setPosition(position + 1);
                }
            }, 30)
        );
    }, [text, position]);

    return (
        <TextboxSpeech>
            <p>{displayedText}</p>
        </TextboxSpeech>
    );
}

export default Textbox;
