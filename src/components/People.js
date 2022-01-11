import { StyledPeople, Person, Input, Label } from "./PeopleStyle";
import { PEOPLE } from "./constants";

function People({onPersonChange, onOptionChange}) {
    return (
        <StyledPeople>
            {PEOPLE.map((person) => (
                <Person key={person}>
                    <Input type="radio" name="person" id={person} value={person} onChange={() => {onPersonChange(person); onOptionChange(null)}} />
                    <Label htmlFor={person}>{person}</Label>
                </Person>
            ))}
            <Person>
                <Input type="radio" name="person" id="Inspector" value="Inspector" onChange={() => onPersonChange("Inspector")}/>
                <Label htmlFor="Inspector">Inspector</Label>
            </Person>
        </StyledPeople>
    );
}

export default People;
