import { useReducer } from "react";
import {Sub} from "../interfaces/Sub";

interface FormState {
    inputValues : Sub
}

type FormReducerAction = {
    type: "change_value",
    payload: {
        inputName:string,
        inputValue:string
    }
} | {
    type: "clear"
}

const initial_state = {
    nickname:'',
    months:0,
    avatar:'https://i.pravatar.cc/150?img=',
    description:''
}

const formReducer = (state:FormState["inputValues"], action:FormReducerAction)=>{
    switch(action.type){
        case "change_value":
            return{
                ...state,
                [action.payload.inputName]: action.payload.inputValue
            }
        case "clear":
            return initial_state
    }
}


const useNewSubForm = () => {
    return useReducer(formReducer, initial_state)
    
}
export default useNewSubForm