import {API_commentPost, path} from "./fetch.jsx";

export async function postComment(id, comment){
    const token = localStorage.getItem('userToken')
    const Form = new FormData()
    Form.append('comment', comment)

    const response = await fetch(`${path}${API_commentPost}/${id}`, {
        method: 'POST',
        headers: {
            Authorization: 'Bearer ' + token,
        },
        body: Form
    })

    return response.status === 200;
}