import React, {useState, useEffect} from 'react'
import BasicLayout from "../layouts/BasicLayout"
import {getGameByUrlApi} from "../api/game"
import useCart from "../hooks/useCart"
import SummaryCart from "../components/SummaryCart"
import AddressShiping from '../components/AddressShiping'
import Payment from "../components/Payment"

export default function Cart() {

    const {getProductCart} = useCart()
    const products = getProductCart()

    return !products ? <EmptyCart /> : <FullCart products={products}/>
}

function EmptyCart() {
    return (
        <BasicLayout className="empty-cart">
            <h2>No hay productos en el carrito</h2>
        </BasicLayout>
    )
}

function FullCart({products}) {

    const [productsData, setProductsData] = useState(null)
    const [reloadCart, setReloadCart] = useState(false)
    const [address, setAddress] = useState(null)


    useEffect(() => {
       (async() => {
           const productsTemp = []
           for await (const product of products) {
               const data = await getGameByUrlApi(product)
               productsTemp.push(data)
           }
           setProductsData(productsTemp)
       })()
       setReloadCart(false)
    }, [reloadCart])
    
    return (
        <BasicLayout className="empty-cart">
            <SummaryCart products={productsData} reloadCart={reloadCart} setReloadCart={setReloadCart}/>
            <AddressShiping setAddress={setAddress}/>
           { address &&  <Payment  products={productsData} address={address}/>}
        </BasicLayout>
    )
}
