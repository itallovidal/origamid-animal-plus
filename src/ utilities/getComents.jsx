export async function getComents(idPostagem){
    const response = await fetch(`https://dogsapi.origamid.dev/json/api/comment/${idPostagem}`)
    const json = await response.json()
    // return {comentario: json.comment_content, autor: json.comment_author}
}