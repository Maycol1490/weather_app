import React from 'react'
import imgLoading from '../assets/loading.gif'

const Loading = () => {
    return (
        <div>
            <div className='container_loading'>
                <img src={imgLoading} alt="Cargando" />
                <h3 className='spinner'>
                    <span>L</span> <span>O</span> <span>A</span> <span>D</span> <span>I</span> <span>N</span> <span>G</span> <span>.</span> <span>.</span> <span>.</span>
                </h3>
            </div>
        </div>
    )
}

export default Loading