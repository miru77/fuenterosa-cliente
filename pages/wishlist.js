import React, {useState, useEffect} from 'react'
import BasicLayout from "../layouts/BasicLayout"
import {size, forEach} from "lodash"
import {Loader} from "semantic-ui-react"
import {getFavoriteApi} from "../api/favorite"
import useAuth from "../hooks/useAuth"
import  ListGames from "../components/ListGames"


export default function wishlist() {

    

    const [games, setGames] = useState(null)
    const {auth, logout} = useAuth()

    useEffect(() => {
        (async () => {
           const response = await getFavoriteApi(auth.idUser, logout)
           if(size(response) > 0) {
               const gameList = []
               forEach(response, (data) => {
                   gameList.push(data.game)
               })
               setGames(gameList)
           } else {
               setGames([])
           }
        })()
    }, [auth])
    return (
        <BasicLayout className="wishlist">
            <div className="wishlist__block">
                <div className="title">
                    Lista de favoritos
                </div>
                <div className="data">
                        {!games && <Loader active>Cargando articulos...</Loader>}
                        {games && size(games) === 0 && (
                    <div className="data__not-found">  <h3>No hay articulos en tu lista...</h3>
                   </div>
                        )}
                        {size(games) > 0 && (
                           <ListGames  games={games}/>
                        )
                         }
                </div>
            </div>
        </BasicLayout>
    )
}
