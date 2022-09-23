import { ACTIONS } from "../App";
import React from "react";

export default function DigiButton ({digit,dispatch}) {
    return (
        <>
            <button onClick={dispatch({type:ACTIONS.ADD_DIGIT,payload:{digit:digit}})}>{digit}</button>
        </>
    )
}