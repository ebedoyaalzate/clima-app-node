const axios = require('axios');


const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lng}&units=metric&appid=7e0e7d7543518b325f730b33b5ec38d7`);

    if (resp.data.cod !== '200') {
        throw new Error(`Las coordenadas estan mal escritas: lat-${lat} lng-${lng}`);
    }

    let datos = resp.data.list[0];
    let temperatura = datos.main.temp;


    return {
        temperatura
    }
}


module.exports = {
    getClima
}