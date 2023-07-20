import React from 'react';
import loadingGif from '../../assets/loading.gif'
import './loading.css'
function Loading() {
    return (
        <div id={'wrapper_loading'}>
            <div id={'container_loading'}>
                <img src={loadingGif} alt=""/>
                <h2>Carregando</h2>
            </div>
        </div>
    );
}

export default Loading;