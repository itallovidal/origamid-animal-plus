import {path, getUser as get} from "./fetch.jsx";


export async function getUser(token){
    const response = await fetch(path + get, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return await response.json()
}