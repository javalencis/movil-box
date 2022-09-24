import { useEffect, useState } from "react"

const urlGet = 'http://pruebasclaro.movilbox.net:81/desarrollo/test_mbox/public/api/1152215097/users/index'



export const useFecthUsers = (method) => {
    const [users, setUsers] = useState([])

    const getFectUsers = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        setUsers(data.users)

    }


    

    useEffect(() => {
        if(method==='GET'){
            getFectUsers(urlGet)
        }
        
    }, [])


    return users;
}