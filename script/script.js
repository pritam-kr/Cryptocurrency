const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=1&page=1&sparkline=false'

window.addEventListener('load', (e) =>{
    fetch(url)
    .then((res) =>{
        return res.json()
    })
    .then((data) =>{
        var table = ''
        data.forEach((eachData) =>{
        //    console.log(eachData)
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

    document.querySelector('main').style.display = 'none'
    document.querySelector('.detailed-section').style.display = 'block';

    if(e.target.classList.contains("name-box")){
    
       fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&ids=${e.target.dataset.id}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)

       .then((res) =>{
           return res.json()
       })
       .then((data) =>{
           var coin = ''
          data.forEach((eachCoin) =>{
              console.log(eachCoin)
              coin += `
              
              <div class="detailed-container">
              <p style="text-align: right;"><i class="fas fa-times btn-stop"></i></p>
              <header>
                  <img src="${eachCoin.image}" alt="coin-img">
                  <h1>${eachCoin.name}</h1>
                  <p>${eachCoin.symbol}</p>
              </header>
  
              <div class="coin-data">
                  <div class="box-one">
                      <ul>
                          <li class="item"><strong>Rank: </strong> <span>${eachCoin.market_cap_rank}</span>
                          <li class="item"><strong>Current price: </strong> <span>₹${eachCoin.current_price}</span></li>
                          <li class="item"><strong>High in 24h:</strong> <span>₹${eachCoin.high_24h}</span></li>
                          <li class="item"><strong>Low in 24h:</strong> <span>₹${eachCoin.low_24h}</span></li>
                          <li class="item"><strong>ATH:</strong> <span>₹${eachCoin.ath}</span></li>
                          <li class="item"><strong>ATH change in %:</strong> <span>${eachCoin.ath_change_percentage}%</span></li>
                          <li class="item"><strong>ATL:</strong> <span>₹${eachCoin.atl}</span></li>
                          <li class="item"><strong>ATL change in %:</strong> <span>${eachCoin.atl_change_percentage}%</span></li>
                      </ul>
                  </div>
                  <div class="box-two">
                      <ul>
                          <li class="item"><strong>Price change in 24h:</strong> <span>₹${eachCoin.price_change_24h}</span></li>
                          <li class="item"><strong>Price change (24h) in %:</strong> <span>${eachCoin.price_change_percentage_24h}</span></li>
                          <li class="item"><strong>Total supply:</strong> <span></span></li>
                          <li class="item"><strong>Total volume:</strong> <span>${eachCoin.total_volume}</span></li>
                          <li class="item"><strong>Market capital:</strong> <span>${eachCoin.market_cap}</span></li>
                          <li class="item"><strong>Market capital in 24h:</strong> <span>${eachCoin.market_cap_change_24h}</span></li>
                          <li class="item"><strong>Markte capital (24h) in %:</strong> <span>${eachCoin.market_cap_change_percentage_24h}%</span></li>
                          <li class="item"><strong>Last update:</strong> <span>${eachCoin.last_updated} </span></li>
                      </ul>
                  </div>
              </div>

              `

              document.querySelector('.detailed-section').innerHTML = coin;
          })
       })
    }
})

document.querySelector('.detailed-section').addEventListener('click', (e) =>{
    if(e.target.classList.contains('btn-stop')){
        document.querySelector('main').style.display = 'flex'
        document.querySelector('.detailed-section').style.display = 'none';
    }
})

document.querySelector('.btn-search').addEventListener('click', (e) =>{
     document.querySelector('main').style.display = 'none'
        document.querySelector('.detailed-section').style.display = 'none';
        document.querySelector('.search-section').style.display = 'flex';
})


document.forms[0].addEventListener('submit', (e) =>{
    e.preventDefault()

    const searchCoin = document.querySelector('#search-bar').value;
   
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&ids=${searchCoin}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
    .then((res) =>{
        return res.json()
    })
    .then((data) =>{
        var singleCoin = ''
        data.forEach((eachCoin) =>{
            singleCoin += `
            
            <div class="detailed-container">
            <header>
                <img src="${eachCoin.image}" alt="coin-img">
                <h1>${eachCoin.name}</h1>
                <p>${eachCoin.symbol}</p>
            </header>

            <div class="coin-data">
                <div class="box-one">
                    <ul>
                        <li class="item"><strong>Rank: </strong> <span>${eachCoin.market_cap_rank}</span>
                        <li class="item"><strong>Current price: </strong> <span>₹${eachCoin.current_price}</span></li>
                        <li class="item"><strong>High in 24h:</strong> <span>₹${eachCoin.high_24h}</span></li>
                        <li class="item"><strong>Low in 24h:</strong> <span>₹${eachCoin.low_24h}</span></li>
                        <li class="item"><strong>ATH:</strong> <span>₹${eachCoin.ath}</span></li>
                        <li class="item"><strong>ATH change in %:</strong> <span>${eachCoin.ath_change_percentage}%</span></li>
                        <li class="item"><strong>ATL:</strong> <span>₹${eachCoin.atl}</span></li>
                        <li class="item"><strong>ATL change in %:</strong> <span>${eachCoin.atl_change_percentage}%</span></li>
                    </ul>
                </div>
                <div class="box-two">
                    <ul>
                        <li class="item"><strong>Price change in 24h:</strong> <span>₹${eachCoin.price_change_24h}</span></li>
                        <li class="item"><strong>Price change (24h) in %:</strong> <span>${eachCoin.price_change_percentage_24h}</span></li>
                        <li class="item"><strong>Total supply:</strong> <span></span></li>
                        <li class="item"><strong>Total volume:</strong> <span>${eachCoin.total_volume}</span></li>
                        <li class="item"><strong>Market capital:</strong> <span>${eachCoin.market_cap}</span></li>
                        <li class="item"><strong>Market capital in 24h:</strong> <span>${eachCoin.market_cap_change_24h}</span></li>
                        <li class="item"><strong>Markte capital (24h) in %:</strong> <span>${eachCoin.market_cap_change_percentage_24h}%</span></li>
                        <li class="item"><strong>Last update:</strong> <span>${eachCoin.last_updated} </span></li>
                    </ul>
                </div>
            </div>

            `

            document.querySelector('.single-detailed-section').innerHTML = singleCoin;
        })
    })

    document.forms[0].reset()
    
})