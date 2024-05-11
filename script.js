// const btn = document.getElementById("search-btn");
// const search = document.getElementById("search-input");
// const cityName = document.getElementById("city-name");
// const cityTime = document.getElementById("city-time");
// const cityTemp = document.getElementById("city-temp");

// btn.addEventListener("click" , async () => {
//     const value = search.value;
//     const result = await getdata(value);
//     console.log(result);
//     cityName.innerText = `${result.location.name} , ${result.location.region} , ${result.location.country}`;
//     cityTime.innerText = `${result.location.localtime}`;
//     cityTemp.innerText = `${result.current.temp_c}`;

// })


// async function getdata(cityname){
// const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=163f854921da4622b6384132241404&q=${cityname}&aqi=yes`);
// return await promise.json()
// }

// // http://api.weatherapi.com/v1/current.json?key=163f854921da4622b6384132241404&q=London&aqi=yes

const search = document.getElementById("search-input");
const btn = document.getElementById("search-btn");
const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const citytemp = document.getElementById("city-temp");

btn.addEventListener("click", async () => {
  let value = search.value; 
   const result = await getdata(value);
//    console.log(result);
   cityName.innerText = `${result.location.name} , ${result.location.region} , ${result.location.country}`;
   cityTime.innerText = `${result.location.localtime}`;
   citytemp.innerText = `${result.current.temp_c}`;
})


async function getdata(cityname){
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=163f854921da4622b6384132241404&q=${cityname}&aqi=yes`);
    return await promise.json();
}

// let data = getdata();
// console.log(data);














// const search = document.getElementById("search-input");
// const btn = document.getElementById("search-btn");
// const cityName = document.getElementById("city-name");
// const cityTime = document.getElementById("city-time");
// const cityTemp = document.getElementById("city-temp");

// btn.addEventListener("click", async () => {
//     // alert("hello");
//     let value = search.value;
//     console.log(value);
//     const result = await getdata(value);
//     console.log(result);
//     cityName.innerText = `Country :- ${result.location.country} , Name :- ${result.location.name} , Region :-${result.location.region}`;
//     cityTime.innerText = `LocalTime :- ${result.location.localtime}`;
//     cityTime.innerText = `Temprature :- ${result.current.temp_c}`;
// })

// async function getdata(cityname) {
//     const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=163f854921da4622b6384132241404&q=${cityname}&aqi=yes`);
//     return await promise.json();
// }