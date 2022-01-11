import { OptionsList, Option, Input, Label } from "./OptionStyle";
import { INSPECTOR_ACTIONS, PEOPLE_ACTIONS } from "./constants";

function Options({ selectedPerson, selectedOption, onOptionChange}) {
    const actions = (selectedPerson === "Inspector") ? INSPECTOR_ACTIONS : PEOPLE_ACTIONS;

    return (
        <OptionsList>
            {actions.map((option) => (
                      <Option key={option}>
                          <Input type="radio" name="option" checked={(selectedOption === option) ? true : false}id={option} onChange={() => onOptionChange(option)}/>
                          <Label htmlFor={option}>{option}</Label>
                      </Option>
                  ))}
        </OptionsList>
    );
}

export default Options;

// {selectedPerson === "Inspector" &&
//                 INSPECTOR_ACTIONS.map((option) => (
//                     <Option>
//                         <Input type="radio" name={option} id={option} />
//                         <Label htmlFor={option}>{option}</Label>
//                     </Option>
//                 ))}

//             {selectedPerson != "Inspector" && PEOPLE_ACTIONS.map((option) => (
//                 <Option>
//                         <Input type="radio" name={option} id={option} />
//                         <Label htmlFor={option}>{option}</Label>
//                     </Option>
//             ))}
