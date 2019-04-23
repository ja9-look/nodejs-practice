setTimeout(() => {
    console.log('Two seconds are up')
}, 2000)

const names = ['Andrew', 'Jen', 'Serena']
const shortNames = names.filter((name) => {
    return name.length <= 4
})

const geoCode = (address, callback) => {
    const data = {
        latitude: 0,
        longitude: 0
    }
}