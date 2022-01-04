import "./people.css";

function People() {
    return (
        <div className="people">
            <div>
                <input type="radio" name="person" id="Gail" />
                <label htmlFor="Gail">Gail</label>
            </div>
            <div>
                <input type="radio" name="person" id="Elizabeth" />
                <label htmlFor="Elizabeth">Elizabeth</label>
            </div>
            <div>
                <input type="radio" name="person" id="Michael" />
                <label htmlFor="Michael">Michael</label>
            </div>
            <div>
                <input type="radio" name="person" id="Andrea" />
                <label htmlFor="Andrea">Andrea</label>
            </div>
            <div>
                <input type="radio" name="person" id="Thomas" />
                <label htmlFor="Thomas">Thomas</label>
            </div>
            <div>
                <input type="radio" name="person" id="Brett" />
                <label htmlFor="Brett">Brett</label>
            </div>
            <div>
                <input type="radio" name="person" id="Policeman" />
                <label htmlFor="Policeman">Policeman</label>
            </div>
        </div>
    );
}

export default People;
