import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './userSlice'
import { useGetPokemonByNameQuery } from '../../services/pokomonService'

export default function Users() {
  const count = useSelector((state) => state.users.value)
  const dispatch = useDispatch()
  // Using a query hook automatically fetches data and returns query values
  const { data: pData, error: pError, isLoading: pLoading } = useGetPokemonByNameQuery('bulbasaur')
  const { data: dData, error: dError, isLoading: dLoading } = useGetPokemonByNameQuery('ditto')
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')

  return (
    <div>
      <hr />
      <div>Users pokemons:</div>
      <div>
        {pError ? (
        <>Oh no, there was an error</>
      ) : pLoading ? (
        <>Loading...</>
      ) : pData ? (
        <>
          <div>{pData.species.name}</div>
          <img src={pData.sprites.front_shiny} alt={pData.species.name} />
        </>
      ) : null}
      </div>
      <div>
        {dError ? (
        <>Oh no, there was an error</>
      ) : dLoading ? (
        <>Loading...</>
      ) : dData ? (
        <>
          <div>{dData.species.name}</div>
          <img src={dData.sprites.front_shiny} alt={dData.species.name} />
        </>
      ) : null}
      </div>
      <div>Users counter:</div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <hr />
    </div>
  )
}