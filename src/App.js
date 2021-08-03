import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Pokemon = (props) => {
    const [pokeName, setPokeName] = useState([])

    useEffect(() => {
      
      axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => {
        console.log(response)
        setPokeName(response.data.results)
      })
      .catch(err => {
        console.log(err)
      })
      
  }, [])

    // useEffect(() => {
    //   console.log("hello")
    //     fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
    //     .then(response => {
    //       return response.json()
    //     })
    //     .then(response => {
    //       setPokeName({
    //         name: response.results
    //       })
    //     })
    // }, [])

    return (
      <div>
        {pokeName.map((value, index) => {
          return (<div key={index}>{value.name}</div>)
        })}
      </div>
    )
}

export default Pokemon;
