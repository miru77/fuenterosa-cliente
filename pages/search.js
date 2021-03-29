import React, {useState, useEffect} from 'react'
import {Loader} from "semantic-ui-react"
import BasicLayout from "../layouts/BasicLayout"
import {useRouter} from "next/router"
import {searchGameApi} from "../api/game"
import { size } from 'lodash'
import ListGames from "../components/ListGames"
import Seo from "../components/Seo"


export default function search() {
    const [games, setGame] = useState(null)
    const {query} = useRouter()

    useEffect(() => {
      document.getElementById("search-game").focus()
    }, [])

    useEffect(() => {
      (async () => {
          if(size(query.query) > 0) {
              const response = await searchGameApi(query.query)
              if(size(response) > 0) {
                  setGame(response)
              } else {
                setGame([])
              }
            
          } else {
              setGame([])
          }
      })()
    }, [query])
    return (
        <BasicLayout className="search">
            <Seo title={`Buscando: ${query.query}`}/>
              {!games && <Loader active>Buscando juegos ...</Loader>}
              {games && size(games) === 0 && (
                  <div><h3>No se ha encontrado ningun juego</h3></div>
              )}
              {size(games) > 0 && <ListGames games={games} />}
        </BasicLayout>
    )
}
