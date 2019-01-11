const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// let infoLugar = lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(e => console.log('Error ', e));

// clima.getClima(infoLugar.latitud, infoLugar.longitud)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(e => console.log('Error: ', e));


let getInformacion = async(direccion) => {
    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.latitud, coors.longitud);

        return `El clima en ${coors.direccion} es de: ${temp.temperatura}°`;
    } catch (e) {
        return `El clima en ${direccion} no se pudo obtener`;
    }
}


getInformacion(argv.direccion)
    .then(resp => console.log(resp))
    .catch(e => console.log(e));