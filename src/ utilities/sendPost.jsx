import {API_POST, path} from "./fetch.jsx";
export async function sendPost(post){
    const token = localStorage.getItem('userToken')
    const Form = new FormData()

    Form.append('img', post.imagem )
    Form.append('peso', post.peso)
    Form.append('idade', post.idade)
    Form.append('nome', post.nome)


    const response = await fetch(`${path}${API_POST}`, {
        method: 'POST',
        headers:{
            Authorization: 'Bearer ' + token
        },
        body: Form
    })


    return response.status === 200
}