import { PEOPLE, WEAPONS, ROOMS } from "./constants";
import { DetailsList, Label, Input, Detail } from "./DetailsStyle";

function Details({ selectedPerson, selectedOption, onDetailChange }) {
    console.log(selectedOption);
    let optionMenu = [];
    if (selectedOption === "Weapon") {
        optionMenu = [...WEAPONS];
    } else if (selectedOption === "Person") {
        for (let i = 0; i < PEOPLE.length; i++) {
            if (PEOPLE[i] !== selectedPerson) {
                optionMenu.push(PEOPLE[i]);
            }
        }
    } else if (selectedOption === "Room") {
        optionMenu = [...ROOMS];
    }

    return (
        <DetailsList>
            {optionMenu.map((detail) => (
                <Detail key={detail}>
                    <Input
                        type="radio"
                        name="detail"
                        onChange={() => onDetailChange(detail)}
                        id={`${detail}Detail`}
                    />
                    <Label htmlFor={`${detail}Detail`}>{detail}</Label>
                </Detail>
            ))}
        </DetailsList>
    );
}

export default Details;
