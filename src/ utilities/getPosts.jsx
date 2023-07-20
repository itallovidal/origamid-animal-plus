import React from "react";
import {path} from "./fetch.jsx";
export async function getPosts(page){
    const response = await fetch(`${path}api/photo/?_page=1`)
    console.log(`${path}api/photo/?_page=1`)
    return await response.json()
}





