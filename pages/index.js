import React, {useState, useEffect} from 'react';
import {Loader} from "semantic-ui-react"
import {getLastGamesApi} from "../api/game"
import {size} from "lodash"
import BasicLayout from "../layouts/BasicLayout"
import ListGames from "../components/ListGames"
import Seo from "../components/Seo"

export default function Home() {

  const [games, setGames] = useState(null)


  useEffect(() => {
   (async() => {
        const response = await getLastGamesApi(10)
        if(size(response) > 0) {
          setGames(response)
        } else {
          setGames([])
        }
   })()
  }, [])

  return (
    
    <BasicLayout className="home">
      <Seo
       
      />

        {!games && <Loader active>Cargando arte !!!</Loader>}
        {games && size(games) === 0 && (
          <div><h3>Por el momento no hay articulos</h3></div>
        )}
        {size(games) > 0 && <ListGames games={games}/>}
        

    

    </BasicLayout>
  )
}
