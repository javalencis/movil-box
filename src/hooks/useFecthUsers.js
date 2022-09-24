import { useEffect, useState } from "react"

const urlGet = 'http://pruebasclaro.movilbox.net:81/desarrollo/test_mbox/public/api'


export const useFecthUsers = (method, idUsers = 0) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const getFecthUsers = async (url) => {
        try {
            const res = await fetch(url + '/1152215097/users/index')
            const data = await res.json()
            setData(data.users)
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }



    }

    const getFecthUser = async (url) => {

        const res = await fetch(url + `/1152215097/users/${idUsers}`)
        const data = await res.json()
        setData(data.user)




    }

    const getFecthProfiles = async (url) => {
        try {
            const res = await fetch(url + '/profiles')
            const data = await res.json()
            setData(data.profiles)
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }


    }



    useEffect(() => {
        if (method === 'GET_users') {

            getFecthUsers(urlGet)
        } else if (method === 'GET_user') {
            getFecthUser(urlGet)
        } else if (method === 'GET_profiles') {
            getFecthProfiles(urlGet)
        }

    }, [])


    return {
        data,
        loading
    };
}