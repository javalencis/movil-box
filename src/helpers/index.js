export const profile = (user, profiles) => {
    const p = profiles.find(profile => profile.id === user.profile)
    return p.name.charAt(0).toUpperCase() + p.name.slice(1)
}

export const logoName = (name) => {
    const pNames = name.split(' ')
    if (pNames.length == 1) {
        return pNames[0].charAt(0)
    } else {
        return pNames[0].charAt(0) + pNames[1].charAt(0)
    }

}

export const formatDate = (date) => {
    const d = new Date(date)
    const f = {
        day: d.getDate().toString().padStart(2, '0'),
        month: (d.getMonth() + 1).toString().padStart(2, '0'),
        year: d.getFullYear(),
        hours: d.getHours().toString().padStart(2, '0'),
        minutes: d.getMinutes().toString().padStart(2, '0')
    }

    return `${f.day}/${f.month}/${f.year} - ${f.hours}:${f.minutes}`
}


export const filterSearchAll = (users,searchValue) => {
    let usersAux = users


    if (searchValue.name.length > 1) {
        usersAux = users.filter(u => u.name.toLowerCase().includes(searchValue.name.toLowerCase()))
    }
    if (searchValue.email.length > 1) {
        usersAux = usersAux.filter(u => u.email.toLowerCase().includes(searchValue.email.toLowerCase()))
    }
    if (searchValue.state !== "") {
        usersAux = usersAux.filter(u => u.state === searchValue.state)

    }
    if (searchValue.profile !== "") {

        usersAux = usersAux.filter(u => u.profile === searchValue.profile)
    }

    return usersAux

}