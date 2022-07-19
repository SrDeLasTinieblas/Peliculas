import { useState } from 'react'
//import VideoJS from 'video.js'
import ReactPlayer from 'react-player';

const url = 'https://api.themoviedb.org/3/movie/550?api_key=6cf2374e95fc26b3f7657c498a69dff2';


const Pelicula = () => {

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        }
    )


    const [pelicula, setPelicula] = useState({
        id: '',
        titulo: '',
        sinopsis: '',
        imagen: '',
        trailer: '',
        fecha: '',
        duracion: '',
        calificacion: '',
        genero: '',
        director: '',
        actores: '',
        clasificacion: '',
        estado: '',

    });


  return (
    <div>
        {/*<h1>Pelicula</h1>*/}
        {/*<VideoJS options={videoJsOptions} />*/}
        <ReactPlayer
            url='https://mega.nz/file/DDYERSzR#BHXwxqT0HaJ1CC6jC4wvnoD6biKBbIx9l7CdG0zMfPs'
            controls={true}
            width='100%'
            height='100%'
        />

    </div>
  )
}

export default Pelicula