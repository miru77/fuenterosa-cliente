import React, {useState, useEffect} from 'react'
import {Grid, Button} from "semantic-ui-react"
import { getAddressApi, deleteAddressApi } from '../../../api/address'
import useAuth from "../../../hooks/useAuth"
import {map, size} from "lodash"


export default function ListAddress({reloadAddresses ,setReloadAddresses, openModal}) {

    const [addresses, setAddresses] = useState(null)
    const {auth, logout}=useAuth() 
 
    useEffect(() => {
        (async () => {
            const response = await getAddressApi(auth.idUser, logout)
            setAddresses(response || [])    
            setReloadAddresses(false)      
        })()    
    }, [reloadAddresses])

    if (!addresses) return null
    return (
        <div className="list-address">
            {size(addresses) === 0 ? (
                <h3>No hay ninguna dirección creada</h3>
            ) : (
                <Grid>
                    {
                        map(addresses, (address) => (
                            <Grid.Column key={address.id} mobile={16} tablet={8} computer ={4}>
                                <Address address={address} logout={logout} 
                                setReloadAddresses={setReloadAddresses}
                                openModal={openModal}
                                />

                            </Grid.Column>
                        ))
                    }
                </Grid>
            )} 
        </div>
    )
}

function Address({address, logout, setReloadAddresses, openModal}) {
    const [loading, setLoading] = useState(false)


    const deleteAddress = async () => {

             setLoading(true)
             const response = await deleteAddressApi(address._id, logout)
            console.log(address._id)

            if(response)
            setReloadAddresses(true)
            setLoading(false)
    }

    return (
        <div className="address">
            <p>{address.title}</p>
            <p>{address.name}</p>
            <p>{address.address}</p>
            <p>
                {address.state}, {address.city} {address.postalCode}
                </p>
            <p>{address.phone}</p>

            <div className="actions">
                <Button primary onClick={()=>openModal(`Editar: ${address.title}`, address)}>Editar</Button>
                <Button onClick={deleteAddress} loading={loading}>Eliminar</Button>
            </div>
        </div>
    )
    
}
