import React, {useState, useEffect} from 'react'
import {Grid} from "semantic-ui-react"
import {map, size} from "lodash"
import Link from "next/link"
import classNames from "classnames"
import {getAddressApi} from "../../api/address"
import useAuth  from "../../hooks/useAuth"

export default function AddressShiping({setAddress}) {


    const [addresses, setaddresses] = useState(null)
    const [addressActive, setAddressActive] = useState(null)
    const {logout, auth} = useAuth()

    useEffect(() => {
       (async () => {
           const response = await getAddressApi(auth.idUser, logout)
           setaddresses(response || [])
       })()
    }, [])


    return (
      
        <div className="address-shiping">
           <div className="title">Dirección de envio</div>
           <div className="data">
             {size(addresses) === 0 ? (
                 <h3>No hay ninguna dirección creada{" ->"} 
                     <Link href="/account">
                         <a> añade tu primera dirección</a>
                     </Link>
                 </h3>
             ) : (
                    <Grid>
                        {map(addresses,(address) => (
                            <Grid.Column key={address.id} mobile={16} tablet={8} computer={4}>
                                <Address address={address} addressActive={addressActive}
                                 setAddressActive={setAddressActive} setAddress={setAddress}/>
                            </Grid.Column>
                        ))}
                    </Grid>

             )}
               </div>
        </div>
    )
}

function Address({address, setAddressActive, setAddress, addressActive }) {

    const changeAddress = () => {
        setAddressActive(address._id)
        setAddress(address)
    }
    return (
        <div className={classNames("address", {
            active: addressActive === address._id
        })}
            onClick={changeAddress}
        >
            <p>{address.title}</p>
            <p>{address.name}</p>
            <p>{address.address}</p>
            <p>{address.city}, {address.state}, {address.postalCode}</p>  
            <p>{address.phone}</p>
        </div>
    )
}

