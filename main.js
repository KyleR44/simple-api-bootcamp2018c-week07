// I want to create a function in which the user can enter the date and crypto
//and it will return the current vulue of that currencey
document.querySelector('form').addEventListener('submit', coin)

function coin(ev){
  ev.preventDefault()
  let date = document.querySelector('#date').value
  console.log(date)
  fetch(`https://api.coindesk.com/v1/bpi/historical/close.json`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
        console.log(response.bpi[date])
        // document.querySelector('#answer').textContent = response.bpi
let choice = document.getElementById('options').value
         if(choice === "day"){
          forDay(response.bpi, date)
        }else if(choice === "month") {
          forMonth(response.bpi)
        }
      })
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
}
function forDay(month,date){
  let text = document.createTextNode(month[date])
  let span = document.createElement('span')
  span.appendChild(text)
  document.getElementById('answer').append(span)
}

function forMonth(dates){
  for(let date in dates){
    let text = document.createTextNode(dates[date])
    let span = document.createElement('span')
    span.appendChild(text)
    document.getElementById('answer').append(span)
  }
}
