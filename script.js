const weather_click=document.getElementById("get-weather");
const display=document.getElementById("display-weather");

const lat=10.0373;
const lon=76.4086;
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
weather_click.addEventListener("click",()=>{fetch(url)
    .then(res=>res.json())
    .then(data=>{
        console.log("City:",data.name);
         console.log("Temp:", data.main.temp + "°C");
    console.log("Weather:", data.weather[0].description);
display.innerHTML = `
        📍 <b>${data.name}</b><br>
        🌡️ ${data.main.temp}°C<br>
        🌤️ ${data.weather[0].description}
      `;
    })
    .catch(err => {
      console.error("Error fetching weather:", err);
      display.innerHTML = " Failed to fetch weather";
    });

})
