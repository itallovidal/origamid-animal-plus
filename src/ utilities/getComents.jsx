export async function getComents(idPostagem){
    const response = await fetch(`https://dogsapi.origamid.dev/json/api/comment/${idPostagem}`)
    const json = await response.json()
    return json.map( item => {
        return {autor: item.comment_author, conteudo: item.comment_content, id: item.comment_ID}
    })
}

