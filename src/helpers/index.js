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
    const dateA = date.split('T')
    const fecha =  dateA[0].split('-').join('/')
    const hora = dateA[1].substring(0,5)

    return fecha +' - '+hora
}