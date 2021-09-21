export const formatTime = (timestamp) => {
    const dateTime = new Date(timestamp * 1000)
    const hours = dateTime.getHours()
    const minutes = ('0' + dateTime.getMinutes()).slice(-2)
    return `${hours}:${minutes}`
}