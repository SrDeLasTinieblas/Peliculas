//import { useEffect } from "react";
import { async } from "@firebase/util";
import { useAuthContext } from "../../components/context/authContext";
//import {useNavigate} from "react-router-dom";
import './style.css';
import { Loading } from "../../components/Loading/Loading";
import { Link } from "react-router-dom";

export function Home() {

    const { user, logout, loading } = useAuthContext();
    //const navigate = useNavigate();

    console.log(user);

    const handleLogout = async () => {
        await logout();
        //navigate("/login");
    }

    if (loading) {
        return <Loading />;
    }

    { /*<button onClick={handleLogout}>Logout</button> 

Home {user.email}*/
    }




    return (
        <div>
            <main classNameName="principal">
                <button onClick={handleLogout}>Logout</button>
                <h3>{user.email}</h3>
                <div className="pelicula-principal">
                    <div className="contenedor">
                        <h3 className="titulo">Blade Runner 2049</h3>
                        <p className="descripcion">
                            El agente K (Ryan Gosling), un 'blade runner' caza-Replicantes del Departamento de Policía de Los Ángeles, descubre un secreto que ha estado enterrado durante mucho tiempo y que tiene el potencial de llevar a la sociedad al caos.
                        </p>
                        <button role="button" className="boton">
                            {/*<i className="fa-solid fa-play"></i>
                            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Reproducir</a>*/}

                            <div className="fa-solid fa-play">
                                {<Link to='/pelicula' className="fa-solid fa-play">Repsroducir</Link>}
                            </div>

                        </button>
                        <button role="button" className="boton">
                            <i className="fa-solid fa-circle-info"></i>Más Información</button>
                    </div>
                </div>

                <div className="peliculas-recomendadas contenedor">
                    <div className="contenedor-titulo-controles">
                        <h3>Películas Recomendadas</h3>
                        <div className="indicadores"></div>
                    </div>
                    <div className="contenedor-principal">
                        <button role="button" id="flecha-izquierda" className="flecha-izquierda">
                            <i className="fa-solid fa-angle-left"></i>
                        </button>

                        <div className="contenedor-carousel">
                            <div className="carousel">

                                <div className="pelicula">
                                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                                        <img src="https://m.media-amazon.com/images/M/MV5BODZmYjMwNzEtNzVhNC00ZTRmLTk2M2UtNzE1MTQ2ZDAxNjc2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg" alt="imagen de sin city" />
                                    </a>
                                </div>

                                <div className="pelicula">
                                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                                        <img src="https://m.media-amazon.com/images/M/MV5BY2IzNGNiODgtOWYzOS00OTI0LTgxZTUtOTA5OTQ5YmI3NGUzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg" alt="imagen de watchmen" />
                                    </a>
                                </div>

                                <div className="pelicula">
                                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                                        <img src="https://m.media-amazon.com/images/M/MV5BYWRiYjQyOGItNzQ1Mi00MGI1LWE3NjItNTg1ZDQwNjUwNDM2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_QL75_UX190_CR0,0,190,281_.jpg" alt="imagen de ghost in the shell" />
                                    </a>
                                </div>
                                <div className="pelicula">
                                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                                        <img src="https://m.media-amazon.com/images/M/MV5BNWNkMDhmOTEtMjc3Ni00OWQwLWJhYjgtYjI0NGY1ZTExYzkzXkEyXkFqcGdeQXVyMzE0MjY5ODA@._V1_FMjpg_UX1000_.jpg" alt="imagen de blade runner" /></a>
                                </div>
                                <div className="pelicula">
                                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                                        <img src="https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_.jpg" alt=" imagen de blade runner 2049" /></a>
                                </div>
                                <div className="pelicula">
                                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                                        <img src="https://m.media-amazon.com/images/M/MV5BM2ZiZTk1ODgtMTZkNS00NTYxLWIxZTUtNWExZGYwZTRjODViXkEyXkFqcGdeQXVyMTE2MzA3MDM@._V1_FMjpg_UX1000_.jpg" alt="imagen de akira" /></a>
                                </div>
                                <div className="pelicula">
                                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                                        <img src="https://m.media-amazon.com/images/M/MV5BMTkzOTkwNTI4N15BMl5BanBnXkFtZTYwMDIzNzI5._V1_.jpg" alt="imagen de The Fifth Element" /></a>
                                </div>
                                <div className="pelicula">
                                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                                        <img src="https://m.media-amazon.com/images/M/MV5BYmY5YmJiM2QtNjdhOC00NjRhLTgyNDEtYmM1NmJhNjc5NDE2XkEyXkFqcGdeQXVyMjQ4ODcxNTM@._V1_.jpg" alt="imagen de halo" /></a>
                                </div>
                                <div className="pelicula">
                                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                                        <img src="https://m.media-amazon.com/images/M/MV5BMDRjYWI5NTMtZTYzZC00NTg4LWI3NjMtNmI3MTdhMWQ5MGJlXkEyXkFqcGdeQXVyNTg4MDc4Mg@@._V1_.jpg" alt="imagen de stranger things" /></a>
                                </div>
                                <div className="pelicula">
                                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                                        <img src="https://m.media-amazon.com/images/M/MV5BZGQ0ZTYwN2ItNWY1Yi00YzgwLWEyY2MtMjRiYzk5NmNmMTk5XkEyXkFqcGdeQXVyNjg3MDMxNzU@._V1_.jpg" alt="imagen de walking dead " /></a>
                                </div>
                                <div className="pelicula">
                                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                                        <img src="https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg" alt="imagen de batman" /></a>
                                </div>
                                <div className="pelicula">
                                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                                        <img src="https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_.jpg" alt="imagen de spiderman" /></a>
                                </div>
                                <div className="pelicula">
                                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                                        <img src="https://m.media-amazon.com/images/M/MV5BMDAxYzU2YjEtNmNjNS00OGJlLTg3MzgtNzAwN2E1ZWFiYTg5XkEyXkFqcGdeQXVyNTkwNzYyODM@._V1_FMjpg_UX1000_.jpg" alt="imagen de evangelion" /></a>
                                </div>
                                <div className="pelicula">
                                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                                        <img src="https://m.media-amazon.com/images/M/MV5BNDBiZTNiNjItYWFjNC00Yzc2LWFjMWUtNDAyZmFlZGM0ZWI0XkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_.jpg" alt="imagen de interestelar" /></a>
                                </div>
                                <div className="pelicula">
                                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                                        <img src="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg" alt="imagen de inception" /></a>
                                </div>
                                <div className="pelicula">
                                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                                        <img src="https://m.media-amazon.com/images/M/MV5BN2QwNzViYmItYWI1OC00NmE5LThkYmItOTVhNmU4YzMwMWFhXkEyXkFqcGdeQXVyNDI3NjU1NzQ@._V1_.jpg" alt="imagen de perfect blue" /></a>
                                </div>
                                <div className="pelicula">
                                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                                        <img src="https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg" alt="imagen de the matrix" /></a>
                                </div>
                                <div className="pelicula">
                                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                                        <img src="https://m.media-amazon.com/images/M/MV5BNzM3NDFhYTAtYmU5Mi00NGRmLTljYjgtMDkyODQ4MjNkMGY2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg" alt="imagen de kill bill" /></a>
                                </div>
                                <div className="pelicula">
                                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                                        <img src="https://m.media-amazon.com/images/M/MV5BZjZlZDlkYTktMmU1My00ZDBiLWFlNjEtYTBhNjVhOTM4ZjJjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" alt="imagen de donnie darko" /></a>
                                </div>
                                <div className="pelicula">
                                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                                        <img src="https://m.media-amazon.com/images/M/MV5BNjM4OTQ4NjctZTYxYS00NWJiLThiZGItZjI4NjRhYWFhZTBiXkEyXkFqcGdeQXVyNTc3MjUzNTI@._V1_.jpg" alt="imagen de whiplash" /></a>
                                </div>

                            </div>
                        </div>

                        <button role="button" id="flecha-derecha" className="flecha-derecha">
                            <i className="fa-solid fa-angle-right"></i>
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}
