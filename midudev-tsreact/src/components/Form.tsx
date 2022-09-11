import { useReducer, useState } from "react"
import {Sub} from "../interfaces/Sub";
interface FormState {
    inputValues : Sub
}

interface PropsDeForm {
    onNewSub: (newSub:Sub)=> void
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

const Form = ({onNewSub}:PropsDeForm) => {

    /* const [inputValues, setInputValues] = useState<FormState["inputValues"]>({
        nickname:'',
        months:0,
        avatar:'https://i.pravatar.cc/150?img=',
        description:''
    }) */

    const [inputValues, dispatch] = useReducer(formReducer, initial_state)

    const handleChange = (evt:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        /* setInputValues({
            ...inputValues,
            [evt.target.name]: evt.target.value
        }) */
        dispatch({type:"change_value", payload:{inputName:evt.target.name,inputValue: evt.target.value}})
    }

    const handleSubmit = (evt:React.FormEvent<HTMLFormElement>) =>{
        evt.preventDefault();
        onNewSub(inputValues)
        handleClear()
    }

    const handleClear = ()=>{
        dispatch({type: "clear"})
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={inputValues.nickname} type="text" name="nickname" placeholder="Nickname"/>
            <input onChange={handleChange} value={inputValues.months} type="number" name="months" placeholder="subMonths"/>
            <input onChange={handleChange} value={inputValues.avatar} type="text" name="avatar" placeholder="avatar"/>
            <textarea onChange={handleChange} value={inputValues.description} name="description" placeholder="description"/>
            <br /><button>Save</button>
        </form>
    </div>
  )
}

export default Form