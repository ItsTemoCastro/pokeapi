// Dependencies
import React from 'react'
import {useState, useEffect} from 'react';
import { getAllPokemon } from '../../services/pokemon';
// Components

// Styles
import './style.css'

const Banner = (props) => {
  /* const setLoading = props.setLoading
   const setPokemonData = props.setPokemonData
   const setPrevUrl = props.setPrevUrl
   const setNextUrl = props.setNextUrl
   const loadingPokemon = props.loadingPokemon
   */
  

  /*  const next = async() =>{             aqui me equivoque bien culero :v, solo era pasar el props de la funcion sin hacer este desmadre
        setLoading(true)
        let data = await getAllPokemon(props.nextUrl)
        await loadingPokemon(data.results)
        setNextUrl(data.next)
        setPrevUrl(data.previous)
        setLoading(false)
        
    }
    const prev = async() =>{
        if (!props.prevUrl) return;
        setLoading(true)
        let data = await getAllPokemon(props.prevUrl)
        await loadingPokemon(data.results)
        setNextUrl(data.next)
        setPrevUrl(data.previous)
        setLoading(false)
    }
   */
  return (
    <div className='banner'>
        <div className="banner-layer">
            <div className="banner-title">
                <h1>Bienvenidos a mi Pokedex</h1>
            </div>
            <div className="banner-description">
                <p>Aqui podras visualizar diferentes pokemones obtenidas desde una api y con los 
                    botones de abajo cambiar entre las diferentes paginas</p>
                <div className="banner-buttons">
                    <button className="banner-button" onClick={props.prev}><i className="fas fa-arrow-left"></i></button>
                    <button className="banner-button" onClick={props.next}><i className="fas fa-arrow-right"></i></button>
                </div>
            </div>
            
        </div>
    </div>
  )
}


export default Banner
