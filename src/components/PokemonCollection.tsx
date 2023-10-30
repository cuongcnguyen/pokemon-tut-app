import React from 'react'
import { Pokemon, PokemonDetail } from '../interface';
import PokemonList from './PokemonList';
import './pokemon.css';   
import { Detail } from '../App';

interface Props{
    pokemons: PokemonDetail[];
    viewDetail: Detail;
    setViewDetail: React.Dispatch<React.SetStateAction<Detail>>;
}

const PokemonCollection:React.FC<Props> = (props) => {
    const {pokemons, viewDetail, setViewDetail} = props;
    const selectPokemon = (id: number) =>{
        setViewDetail({
            id:id,
            isOpened:true
        })
    }
    return (
    <div>
        <section className={viewDetail.isOpened? 'collection-container-active' : 'collection-container'}>
            {pokemons.map((pokemon) => {
                return (
                    <div onClick={()=>selectPokemon(pokemon.id)}>
                        <PokemonList 
                        viewDetail={viewDetail}
                        setViewDetail={setViewDetail}
                        key = {pokemon.id}
                        name = {pokemon.name}
                        id = {pokemon.id}
                        abilities = {pokemon.abilities}
                        image = {pokemon.sprites.front_default} 
                        />
                    </div>
                )
            })}
        </section>
    </div>
    );
}

export default PokemonCollection