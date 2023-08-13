
console.log("Connected✅");

// https://api.openweathermap.org/data/2.5/weather?q=jaipur&apikey=f714580a3f62ae2c4a09b17d5a120590




var fetchData = async(city)=>{
    // const data = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=482ab80833128b8817b5eb487df1942a`)
    // .then(response=> response.json())
    // .then(result => console.log(result))
    // .catch(error => console.log('error',error));

    const response=await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=482ab80833128b8817b5eb487df1942a`);
    
    console.log((response.data.main.temp-273.15).toFixed(2));

    document.getElementsByClassName('temperature')[0].innerText=(response.data.main.temp-273.15).toFixed(2);
    
    console.log("middle 🎉")
    document.getElementsByClassName('city')[0].value="";


}

function search(){
    var city = document.getElementsByClassName('city')[0].value;
    fetchData(city)
}




console.log('End👋');