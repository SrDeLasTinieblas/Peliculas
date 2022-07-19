import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';

export const Inicio = () => {

  return (
<body className='app'>
      <div className='container-fluid header'>
        <div className="row">
          <div className="col-md12 nav-bar riverdale">{/* imagen de fondo */}
            <img className="logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" />

            <div className="first-button">{<Link to='/login' className="iniciar-sesion">iniciar sesión</Link>}</div>


        <div className="contenido">
            <div className="intro-content">
              <h1>Tu próxima historia, ahora</h1>
            </div>

            <br />

            <div className="intro-contenido">
              <h2>DISFRUTANDO DONDE QUIERAS.</h2>
            </div>

            <div className="intro-contenido">
              <h2>CANCELA CUANDO QUIERAS</h2>
            </div>
            </div>

            <div className="second-button">
              {<Link to='/registro' className="mes-gratis">disfruta un mes gratis</Link>}
            </div>

          </div>{/** Fin de imagen de fondo */}


          <div>
            <div className="container-menu">
              <br />
              <div className="Container-category">
                <div className='col-md4-ver'>
                  <i className="fas fa-tv"></i>
                  {/*<hr className="tv-line" width="27%"/>*/}
                </div>
                <br />
                {/*<div className="texto-peliculas">
        <p >Ver peliculas y programas de TV cuando y <br/> donde quieras, personalizados para ti.</p>
        <br/>
        <br/>
    </div>*/}
                <div className="imagen-tv">
                  <img src="https://assets.nflxext.com/ffe/siteui/acquisition/home/thisIsNetflix/modules/asset_TV_UI.png" />
                </div>
                <div className="ver-netflix">
                  <p >Ver Netflix en tu TV</p>
                </div>
                {/*<div className="smart-tv">
                  <p>Smart Tv, Playstation, Xbox, Chromecast, <br />
                    Apple TV, reproductores de Blu-Ray y más.</p>
                  <hr className="smart-line" width="40%" />
                </div>

                <div className="imagen-devices">
                  <img src="https://assets.nflxext.com/ffe/siteui/acquisition/home/thisIsNetflix/modules/asset_mobile_tablet_UI_2.png" />
                </div>
                <div className="disfruta-netflix">
                  <p >Disfruta al instante o descarga videos <br /> para más tarde</p>
                </div>
                <div className="netflix-disponible">
                  <p >Disponible en tu teléfono o tablet, vayas a <br /> donde vayas.</p>
                  <hr className="disponible-line" width="40%" />
                </div>

                <div className="imagen-laptop">
                  <img src="https://assets.nflxext.com/ffe/siteui/acquisition/home/thisIsNetflix/modules/asset_website_UI.png" />
                </div>

                <div className="disfruta-netflix">
                  <p >Disponible en tu teléfono o tablet, vayas a <br /> donde vayas.</p>
                  <hr className="disponible-line" width="40%" />
                </div>*/}

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                
              </div>

              <br />


            </div>

          </div>

        </div>

      </div>

    </body>

  )
}