import React from 'react';
import loadingGif from '../../assets/loading.gif'
import './loading.css'
function Loading({msg}) {
    return (
        <div id={'wrapper_loading'}>
            <div id={'container_loading'}>
                <img src={loadingGif} alt=""/>
                <h2>{msg ? msg : 'carregando'}</h2>
            </div>
        </div>
    );
}

export default Loading;