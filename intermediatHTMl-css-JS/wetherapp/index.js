// my api key:  fd9b248dd9224531b8d192448240902 


async function car (){
    fetch('http://api.weatherapi.com/v1/current.json?key=fd9b248dd9224531b8d192448240902&q=London&aqi=no'  )
    .then((response) =>{
        console.log(response.json())
    })
}
 
car()
