import type { NextPage } from 'next'
import { Pokemon } from '../modules/Home/home-types'
import HomeView from "../modules/Home/HomeView"

export async function getServerSideProps() {
  const pokemons = await fetch('https://pokeapi.co/api/v2/pokemon/')
  const data = await pokemons.json()
  console.log(data)
  return {
    props: { pokemons: data.results }, // will be passed to the page component as props
  }
}

const Home: NextPage<{ pokemons: Pokemon[] }> = ({ pokemons }) => {
  return <HomeView data={pokemons} />
}

export default Home
