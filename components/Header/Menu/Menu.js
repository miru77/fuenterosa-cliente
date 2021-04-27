import {useState, useEffect} from 'react'
import {Container, Menu, Grid, Icon, Label} from "semantic-ui-react"
import Link from "next/link"
import BasicModal from "../../Modal/BasicModal"
import Auth from "../../Auth"
import useAuth from "../../../hooks/useAuth"
import useCart from "../../../hooks/useCart"
import {getMeApi} from "../../../api/user"
import {getPlatformApi} from "../../../api/platform"
import {map} from "lodash"
import {breakpointUpSm} from "../../../utils/breakpoint"
import useWindowSize from "../../../hooks/useWindowSize"


export default function MenuWeb() {

    const {width} = useWindowSize();


    const [platforms, setPlatforms] = useState([])

    const [showModal, setshowModal] = useState(false)

    const [titleModal, settitleModal] = useState("Inicia sesión")

    const [user, setUser] = useState(undefined)

    const {logout, auth} = useAuth()


    useEffect(() => {
       (async () => {
           const response = await getPlatformApi()
           setPlatforms(response || [])
       })()
    }, [])



    useEffect(() => {
        (async () => {
            const response = await getMeApi(logout)
            setUser(response)
        })();
       
    }, [auth])

    const onShowModal = () => setshowModal(true)
    const onCloseModal = () => setshowModal(false)

    return (
        <div className="menu">
            <Container>
                <Grid>

                { (width > breakpointUpSm) ? (
                    <>
                      <Grid.Column className="menu__left" mobile={16} tablet={16} computer={6}>
                        <MenuPlatforms platforms={platforms}/>
                    </Grid.Column>
                    <Grid.Column className="menu__right" mobile={16} tablet={16} computer={10}>
                      
                      {user !== undefined &&  <MenuOptions width={width} onShowModal={onShowModal} 
                        user={user}
                        logout={logout}
                      />}
                    
                    </Grid.Column>
                    </>

                ) : (
                    <>
                     <Grid.Column className="menu__right" mobile={16} tablet={16} computer={10}>
                      
                      {user !== undefined &&  <MenuOptions onShowModal={onShowModal} 
                        user={user}
                        logout={logout}
                      />}
                    
                    </Grid.Column>
                    </>
                ) }
                  
                </Grid>
            </Container>
            <BasicModal show={showModal} setShow = {setshowModal} title={titleModal} size="small">
                
                <Auth onCloseModal={onCloseModal} settitleModal={settitleModal}/>
            </BasicModal>
        </div>
    )
}

function MenuPlatforms({platforms}) {
        return (
            <Menu>
                {map(platforms, (platform) => (
                        <Link href={`/games/${platform.url}`}  key={platform._id}>

                            <Menu.Item as="a" name={platform.url}>
                                {platforms.title}
                            </Menu.Item>
                        </Link>
                ))}
            </Menu>
        )
}


function MenuOptions(props) {

    const {onShowModal, user, logout, width} = props;
    const {productsCart} = useCart()
    


    return(

        <Menu>
            {user ? (
                <>
                <Link href="/order">
                <Menu.Item as="a">
                     <Icon name="game"/>
                     { (width > breakpointUpSm) ? (" Mis pedidos") :("")}
                
              </Menu.Item>
                </Link>

                <Link href="/wishlist">
                <Menu.Item as="a">
                     <Icon name="heart outline"/>
                     { (width > breakpointUpSm) ? ("Favoritos") :("")}
              </Menu.Item>
                </Link>

                <Link href="/account">
                <Menu.Item as="a">
                     <Icon name="user outline"/>

                     { (width > breakpointUpSm) ? (<>
                        {user.name} {user.lastname}
                     </>) :<>  {user.name}
                     </>}
                
              </Menu.Item>
                </Link>

                <Link href="/cart">
                <Menu.Item as="a" className="m-0">
                     <Icon name="cart"/>
                     {productsCart > 0 && (
                            <Label color="red" floating circular>
                            {productsCart}
                        </Label>
                     )}
                  
              </Menu.Item>
                </Link>
                 
                 <Menu.Item onClick={logout}  className="m-0">
                 <Icon name="power off"/>
              </Menu.Item>
              </>
            ) : (
                <Menu.Item onClick={onShowModal}>
                <Icon name="user outline"/>
                  Mi cuenta
                </Menu.Item>
            )}
            

        </Menu>
       
    )
    
}
