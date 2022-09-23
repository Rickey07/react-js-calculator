import './App.css';
import React , {useReducer} from 'react';
import DigiButton from './Components/DigitCompo';
import OperationButton from './Components/OperationButton';

export const ACTIONS = {
  ADD_DIGIT:'add_digit',
  CLEAR_ALL:'clear_all',
  DELETE_DIGIT:'delete-digit',
  EVALUATE_ALL:'evaluate-all',
  CHOOSE_OPERATION:'choose-operation'
}


function reducer(state,{type,payload}) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        currentOperand:`${state.currentOperand || ""}${payload.digit}`  
      }
    case ACTIONS.CLEAR_ALL:
      console.log("now")
    break;
    case ACTIONS.DELETE_DIGIT:
      console.log("hello")
    break;
    case ACTIONS.EVALUATE_ALL:
      console.log('hello')
    break;
    default:
      console.log("jairam")
      break;
  }
}

function App() {
  const [{previousOperand,currentOperand,operation},dispatch] = useReducer(
    reducer,
    {});

  return (
    <>
      <h1 className="main-heading">Scientfic Calculator Using React JS</h1>
      <div className="container">
        <div className="output-container">
          <div className='previous-operand'>{previousOperand} {operation}</div>
          <div className='current-operand'>{currentOperand}</div>
        </div>
        <button className="clear-all">AC</button>
        <button>DEL</button>
        <OperationButton operation="/" dispatch={dispatch}/>
        <DigiButton digit="1" dispatch={dispatch}/>
        <DigiButton digit="2" dispatch={dispatch}/>
        <DigiButton digit="3" dispatch={dispatch}/>
        <OperationButton operation="*" dispatch={dispatch}/>
        <DigiButton digit="4" dispatch={dispatch}/>
        <DigiButton digit="5" dispatch={dispatch}/>
        <DigiButton digit="6" dispatch={dispatch}/>
        <OperationButton operation="+" dispatch={dispatch}/>
        <DigiButton digit="7" dispatch={dispatch}/>
        <DigiButton digit="8" dispatch={dispatch}/>
        <DigiButton digit="9" dispatch={dispatch}/>
        <OperationButton operation="-" dispatch={dispatch}/>       
        <DigiButton digit="." dispatch={dispatch}/>        
        <DigiButton digit="0" dispatch={dispatch}/>
        <button className="clear-all">=</button>
      </div>
    </>
  );
}

export default App;
