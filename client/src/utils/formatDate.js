export default (date) => {
    date = new Date(date).toString()
    date = date.slice(4, 15)
    return date
}