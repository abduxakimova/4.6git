fetch ('https://api.openweathermap.org/data/2.5/weather?q=China&units=metric&appid=${API_KEY}')
.then((res)=> res.json ())
.then ( (data) => {
    console.log(data);
})
