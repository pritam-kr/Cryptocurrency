const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=false'

window.addEventListener('load', (e) =>{
    fetch(url)
    .then((res) =>{
        return res.json()
    })
    .then((data) =>{
        var table = ''
        data.forEach((eachData) =>{
           
        })
    })
})