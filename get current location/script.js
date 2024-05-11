// const btn = document.getElementById("get-current-location");

// async function getlocation(position){
//     console.log("Success location was found");
//     let result = await getdata(position.coords.latitude,position.coords.longitude);
//     console.log(result);
// }

// async function faigetlocation(){
//     // console.log("Location was not found some error");

// }
// btn.addEventListener("click", async () => {
//    const result = navigator.geolocation.getCurrentPosition(getlocation,faigetlocation);
// })

// async function getdata(lat,log){
//      const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=163f854921da4622b6384132241404&q=${lat},${log}&aqi=yes`);
//      return await promise.json()
//     }



const btn = document.getElementById("get-current-location");

async function getlocation(position){
let result = await getdata(position.coords.latitude,position.coords.longitude);
console.log(result);
}

function failgetlocation(){
    console.log("We can not get current location")
}

async function getdata(lat,log){
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=163f854921da4622b6384132241404&q=${lat},${log}&aqi=yes`);
    return await promise.json();
}


btn.addEventListener("click",async () => {
 const result = navigator.geolocation.getCurrentPosition(getlocation,failgetlocation);
})