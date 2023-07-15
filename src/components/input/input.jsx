import './input.css'
function Input({type, id, text, placeholder}) {
    return (
        <div className={'container_input'}>
            <label htmlFor={id}>{text}</label>
            <input placeholder={placeholder} type={type} id={id}/>
        </div>
    );
}

export default Input;