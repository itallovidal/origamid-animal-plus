import React from "react";
export async function getPosts(page){
    const response = await fetch(`https://dogsapi.origamid.dev/json/api/photo/?_total<=6&_page=${page}&_user=0`)
    return await response.json()
}





