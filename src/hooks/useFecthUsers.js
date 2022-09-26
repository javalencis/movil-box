import { useEffect, useState } from "react"

const urlGet = 'http://pruebasclaro.movilbox.net:81/desarrollo/test_mbox/public/api'


export const useFecthUsers = (method, idUsers = 0) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const getFecthUsers = async (url=urlGet) => {
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

    const postFecthUser = async (url, body) => {

        const options = {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'

            },
        }
        try {
            const res = await fetch(url + '/1152215097/users', options)
            const data = await res.json()
            setData(data)
        } catch (error) {
            console.log(error)
        }

    }

    const putFecthUser = async (url, body) => {

        const options = {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'

            },
        }
        try {
            const res = await fetch(url, options)
            const data = await res.json()
            setData(data)


        } catch (error) {
            console.log(e)
        } finally {
            setLoading(false)
        }

    }

    const delFecthUser = async (url = urlGet) => {
        const options = {
            method: 'DELETE',
     
        }

        try {
            const res = await fetch(url + `/1152215097/users/${idUsers}`,options)
            const data = await res.json()
            setData(data.user)
            
        } catch (error) {
            console.log(error)
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

    if (method === 'POST') {
        return {
            data,
            postUser: postFecthUser
        }
    } else if (method === 'PUT') {
        return {
            data,
            putUser: putFecthUser,
            loading
        }
    } else if (method === 'DEL') {
        return {
            data,
            delFecthUser,
            loading
        }
    }
    else {
        return {
            data,
            loading,
            getFecthUsers
        };
    }

}