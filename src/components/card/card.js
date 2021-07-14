// Dependencies
import React from 'react'
import pokemonType from '../helpers/pokemonTypes';
// Components

// Styles
import './styles.css'

const Card = ({pokemon}) => {

  return (
    <div className="card">
        <div className="card_img">
            <img src={pokemon.sprites.front_default} alt="" />
        </div>
        <div className="card_name">
            <h3>{pokemon.name}</h3>
        </div>
        <div className="card_types">
            {pokemon.types.map(type =>{
                return <div className="card_type" style={{backgroundColor: pokemonType[type.type.name] }}>{type.type.name} </div>
            })}
        </div>
        <div className="card_info">
            <div className="card_data">
                <p className="title">Weight</p>
                <p>{pokemon.weight}</p>
            </div>
            <div className="card_data">
                <p className="title">Height</p>
                <p>{pokemon.height}</p>
            </div>
            <div className="card_data">
                <p className="title">Ability</p>
                <p>{pokemon.abilities[0].ability.name}</p>
            </div>
        </div>
        
    </div>
  )
}


export default Card
