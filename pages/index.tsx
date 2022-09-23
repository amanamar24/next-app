/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
// try to change styles by another name

 const Home: NextPage = () => {
  const [pokemon, setPokemon] = useState([]);
  useEffect(()=>{
   async function getPokemon() {
    const resp = await fetch("https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json");
    setPokemon(await resp.json());
   }
   getPokemon();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>pokemon page</title>
      
      </Head>
        {/* <div>
          {JSON.stringify(pokemon)}
        </div> */}
        {/* {console.log(pokemon.id)} */}
        <div className={styles.grid}>
          {pokemon.map((pokemon:any) => (
            <div className={styles.card} key={pokemon.id}>
              
              <Link href={`/pokemon/${pokemon.id}`}>
                <a>
                <img
                  src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
                  alt={pokemon.name}
                /> 
                <h3>pokemon.name</h3>
                </a>
                </Link>
              </div>
          ))}
        </div>
    
    </div>
  )
}

export default Home
