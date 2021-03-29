import {BASE_PATH} from "../utils/constants"

export async function getPlatformApi() {

    try {
        const url = `${BASE_PATH}/platforms?_sort=position:asc`
        const response = await fetch(url)
        const resul = await response.json()
        return resul
        
    } catch (error) {
        console.log(error);
        return null
    }
    
}