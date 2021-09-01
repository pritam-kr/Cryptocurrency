const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=false'

window.addEventListener('load', (e) =>{
    fetch(url)
    .then((res) =>{
        return res.json()
    })
    .then((data) =>{
        var table = ''
        data.forEach((eachData) =>{
           console.log(eachData)
           table += `
           <div class="details-table">
                <div class="rank-box">${eachData.market_cap_rank}</div>
                <div class="name-box" data-id="${eachData.id}"><img src="${eachData.image}" style="width: 20px; height: 20px;"> ${eachData.name}</div>
                <div class="symbol-box">${eachData.symbol}</div>
                <div class="current-price-box">₹${eachData.current_price}</div>
                <div class="high-box">₹${eachData.high_24h}</div>
                <div class="low-box">₹${eachData.low_24h}</div>
                <div class="total-volume-box">₹${eachData.total_volume}</div>
           </div>
           `
           document.querySelector('.item').innerHTML = table;
        })
    })
})

document.querySelector('.item').addEventListener('click', (e) =>{
    e.preventDefault()

    if(e.target.classList.contains("name-box")){
    
       fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&ids=${e.target.dataset.id}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)

       .then((res) =>{
           return res.json()
       })
       .then((data) =>{
           var coin = ''
          data.forEach((eachCoin) =>{
              coin += `
              
                

              `
          })
       })
    }
})