import { useState } from "react";
import { Fragment } from "react/cjs/react.production.min"

const Greetings = () => {
    const [chaneText, setChangeText] = useState(false);

    const changeTextHandler = () => {
        setChangeText(true);
    }
    return (
        <Fragment>
            <h1>Hello World!</h1>
            {!chaneText && <p>It's good to see you</p>}
            {chaneText && <p>It's changed</p>}
            <button onClick={changeTextHandler}>Change Text!</button>
        </Fragment>)
};

export default Greetings;