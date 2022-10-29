import { useState } from "react";
import { Fragment } from "react/cjs/react.production.min"
import OutPut from "./OutPut";

const Greetings = () => {
    const [changeText, setChangeText] = useState(false);

    const changeTextHandler = () => {
        setChangeText(true);
    }
    return (
        <Fragment>
            <h1>Hello World!</h1>
            {!changeText && <OutPut>It's good to see you</OutPut>}
            {changeText && <OutPut>It's changed</OutPut>}
            <button onClick={changeTextHandler}>Change Text!</button>
        </Fragment>)
};

export default Greetings;