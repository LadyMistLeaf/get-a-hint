import "./options.css";

function Options() {
    return (
        <div className="options">
            <input type="radio" name="option" id="person" />
            <label htmlFor="person">Person</label>
            <input type="radio" name="option" id="weapon"/>
            <label htmlFor="weapon">Weapon</label>
            <input type="radio" name="option" id="room" />
            <label htmlFor="room">Room</label>
            <input type="radio" name="option" id="alibi" />
            <label htmlFor="alibi">Alibi</label>
        </div>
    );
}

export default Options;