 const API_CREATE_TOKEN = 'jwt-auth/v1/token'

 const API_PATH = 'https://dogsapi.origamid.dev/json/'

 const API_POST_COMMENT = `api/comment/`

 const API_POST = `api/photo`

 const API_GET_USER = 'api/user'

 const GET_COMMENTS = 'api/comment/'

export async function getComents(idPostagem) {
    const response = await fetch(API_PATH + GET_COMMENTS + idPostagem)
    const json = await response.json()
    return json.map(item => {
        return {autor: item.comment_author, conteudo: item.comment_content, id: item.comment_ID}
    })
}

export async function getPosts(page) {
    const response = await fetch(API_PATH + `api/photo/?_page=1`)
    return await response.json()
}

export async function getUser(token) {
    const response = await fetch(API_PATH + API_GET_USER, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return await response.json()
}

export async function getUserPosts(id) {
    console.log(id)
    const response = await fetch(API_PATH + `api/photo/?_page=1&_user=${id}`)
    console.log(`${API_PATH}api/photo/?_page=1&_user=${id}`)
    return await response.json()
}

export async function postComment(id, comment) {
    const token = localStorage.getItem('userToken')
    const Form = new FormData()
    Form.append('comment', comment)

    const response = await fetch(API_PATH + API_POST_COMMENT + id, {
        method: 'POST',
        headers: {
            Authorization: 'Bearer ' + token,
        },
        body: Form
    })

    return response.status === 200;
}

export async function sendPost(post) {
    const token = localStorage.getItem('userToken')
    const Form = new FormData()

    Form.append('img', post.imagem)
    Form.append('peso', post.peso)
    Form.append('idade', post.idade)
    Form.append('nome', post.nome)


    const response = await fetch(API_PATH + API_POST, {
        method: 'POST',
        headers: {
            Authorization: 'Bearer ' + token
        },
        body: Form
    })


    return response.status === 200
}

export async function userLogin(username, password){
     const response = await fetch(API_PATH + API_CREATE_TOKEN, {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify({
             username: username,
             password:password
         })
     })

    if(response.status !== 200)
        return false

    const body = await response.json()
    localStorage.setItem('userToken', body.token)
    return true
 }