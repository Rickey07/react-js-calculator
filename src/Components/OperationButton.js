import React from "react";
import { ACTIONS } from "../App";

export default function OperationButton ({operation,dispatch}) {
    return (
        <>
             <button onClick={dispatch({type:ACTIONS.ADD_DIGIT,payload:{operation:operation}})}>{operation}</button>
        </>
    )
}   