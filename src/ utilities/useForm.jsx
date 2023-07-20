import React from 'react';

const types = {
    email: {
        regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ,
        message: 'Email errado!'
    }
}

function useForm(type) {
    function validate(value){
        if(value.length <= 2)
            return 'Mínimo de 2 caracteres.'
        if(type && types[type]) {
            if(value && types[type].regex.test(value)){
                return true
            }
            else return types[type].regex.message
        }
        return true
    }

    return validate
}

export default useForm;