export const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

export const validateItem = (listing) => {
    if (listing.name == "") {
        return "You need to choose a name"
    }
    return undefined
}