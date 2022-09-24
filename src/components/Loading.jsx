import React from 'react'
import imgLoading from '../assets/loading.gif'

const Loading = () => {
    return (
        <div>
            <div className='container_loading'>
                <img src={imgLoading} alt="Cargando" />
                <h3 className='spinner'>
                    <span>P</span> <span>R</span> <span>O</span> <span>G</span> <span>N</span> <span>O</span> <span>S</span> <span>T</span> <span>I</span> <span>C</span> <span>A</span> <span>T</span> <span>E</span> <span>.</span> <span>.</span> <span>.</span>
                </h3>
            </div>
        </div>
    )
}

export default Loading