import React from 'react';
import {getUser} from "../utilities/API.jsx";

export const Storage = React.createContext(null)

export function GlobalStorage({children}) {
    const [user, setUser] = React.useState({
        id: null,
        username: null,
        nome: null,
        email: null,
    })
    const [modal, setModal] = React.useState(null)
    const [isLogged, setIsLogged ] = React.useState(null)

    React.useEffect(()=>{
        const token = localStorage.getItem('userToken')
        if(token !== null){
            getUser(token).then((response)=>{
                setUser(response)
                setIsLogged(true)
            })
        }else{
            setIsLogged(false)
        }

    }, [isLogged])

    return (
        <Storage.Provider value={{isLogged, setIsLogged, setModal, modal, user, setUser}}>
            {children}
        </Storage.Provider>
    );
}

export default GlobalStorage;

