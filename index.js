fetch ('https://api.openweathermap.org/data/2.5/weather?q=China&units=metric&appid=${API_KEY}')
.then((res)=> res.json ())
.then ( (data) => {
    console.log(data);
})

// Api manzili
// API_KEY = "33dedde6287575d237be2e1c44271762";
//  file_get_contents = ("https://api.openweathermap.org/data/2.5/weather?q=Namangan&units=metric&appid=${API_KEY}");