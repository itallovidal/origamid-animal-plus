import './input.css'
import useForm from "../../ utilities/useForm.jsx";
import React from "react";


function Input({type, id, text, placeholder, setState}) {
    const validate = useForm(type)
    const [error, setError] = React.useState(null)

    function attState({target}){
        const data = validate(target.value)
        if(typeof data === "boolean"){
            setError(null)
            setState((prevState)=>{
                if(type === 'file'){
                    return {...prevState, [id]: target.files[0]}
                }

                return {...prevState, [id]: target.value}
            })
        }
        else if(target.value !== ''){
            setError(data)
        }
        else{
            setError(null)
        }
    }

    return (
        <div className={'container_input'}>
            <label htmlFor={id}>{text}</label>
            {type === 'file'
                ? <input onChange={attState} placeholder={placeholder} type={type} id={id}/>
                : <input onBlur={attState} placeholder={placeholder} type={type} id={id}/>
            }


            {error && <p className={'error'}>{error}</p>}
        </div>
    );
}

export default Input;