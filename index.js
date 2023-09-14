fetch (`https://api.openweathermap.org/data/2.5/weather?q=China&units=metric&appid=33dedde6287575d237be2e1c44271762`)
.then((res)=> res.json())
.then ( (data) => {
    console.log(data);
})
