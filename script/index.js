$(function () {

    const API_KEY = "e46e84cefe438b8ac139ad4491c56394"

    /**************SET DATA OF API************/
    function setDataWeatherCity(data) {
        const city = _.get(data, 'name', 'Not found')
        const temp = _.get(data.main, 'temp', ' ')
        const temM = _.get(data.main, 'temp_max', ' ')
        const tem_m = _.get(data.main, 'temp_min', ' ')
        const speed = _.get(data.wind, 'speed', ' ')
        const humidity = _.get(data.main, 'humidity', ' ')
        // console.log(data)
        $("#City").html(city)
        $('#temp').html(temp)
        $('#tempM').html(temM)
        $('#temp-m').html(tem_m)
        $('#hum').html(humidity)
        $('#Vv').html(speed)
        $('#input').val(city)
    }

    /***************************FETCH API**********************/
    async function FetchApi() {
        const name = $('#input').val()
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}&units=metric `
        fetch(url)
            .then(response => response.json())
            .then(response => {
                //console.log(data)
                setDataWeatherCity(response)
            })
            .catch(error => {
                const err = error
                console.log("Erreur : " + error)
            });

    }

    /****************GET DATA BY GEOLOCATION****************/
    function maPosition(position) {
        const Latitude = position.coords.latitude
        const Longitude = position.coords.longitude
        const coords = `lat=${Latitude}&lon=${Longitude}`
        const url2 = `https://api.openweathermap.org/data/2.5/weather?${coords}&appid=${API_KEY}&units=metric`
        fetch(url2)
            .then(response => response.json())
            .then(response => {

                setDataWeatherCity(response)
            })
            .catch(error => {

                console.log("Erreur : " + error)

            });

    }

    $("#btn").on('click', FetchApi)

    /******************* Menu SLIDE START*******************/
    $("#menu-close").click(function (e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    /******************* FUNCTION Menu SLIDE END****************/
    /***********date************/
    $('#date').text(new Date().getFullYear())

    if (navigator.geolocation)
        navigator.geolocation.getCurrentPosition(maPosition);
})