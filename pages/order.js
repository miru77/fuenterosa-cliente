import React, {useState, useEffect} from 'react'
import {Grid} from "semantic-ui-react"
import BasicLayout from '../layouts/BasicLayout'
import {getOrdersApi} from "../api/order"
import {map, size} from "lodash"
import useAuth from "../hooks/useAuth"
import Orden from "../components/Order"
import Seo from "../components/Seo"


export default function Order() {

    const [orders, setOrders] = useState(null)
    const {auth, logout} = useAuth()

    useEffect(() => {
        (async () => {
            const response = await getOrdersApi(auth.idUser, logout)
            setOrders(response || [])
        })()
    }, [])

    return (
        <BasicLayout className="orders">
            <Seo 
                title="Mis pedidos"
            />
            <div className="orders__block">
                <div className="title">Mis Pedidos</div>
                <div className="data">
                   {size(orders) === 0 ? (
                        <h2 style={{textAlign:"center"}}>
                            Todavia no has realizado ninguna compra
                        </h2>
                   ) : (
                    <OrderList orders={orders}/>
                   ) }
                </div>
            </div>

        </BasicLayout>
    )
}

function OrderList({orders}) {

    return(
       <Grid>
           {map(orders, (order) => (
               <Grid.Column mobile={16} tablet={8} computer={8}>
                   <Orden order={order}/>
               </Grid.Column>
           ))}
       </Grid>
    )
    
}
