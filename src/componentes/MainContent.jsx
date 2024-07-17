import React, { useState } from "react";
import "../assets/scss/estilo.scss";

function MainContent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <main>
          <div className="gridPadre1">
            <div className="objetoCentrado1">
              <a href="#">
                <img
                  alt="icono"
                  className="container-fluid textoMovimiento"
                  src="/img/05-img-costados-larga/4.png"
                />
              </a>
              <img
                alt="imagen"
                className="container-fluid imagen-limitada3 imagen-publicidad"
                src="/img/02-logos/puchulitamusicainfantil1.png"
              />
              <a href="#">
                <img
                  alt="icono"
                  className="container-fluid textoMovimiento"
                  src="/img/05-img-costados-larga/3.png"
                />
              </a>
            </div>
          </div>

          <div className="gridPadre">
       

            <div className="objetoCentrado1">
              <p>
                <a href="#">
                  <img
                    className="imagen-detras imagen-publicidad"
                    src="/img/05-img-costados-larga/1a.png"
                    alt=""
                  />
                </a>
              </p>
            </div>

            <div className="objetoCentrado1 imagen-publicidad">
              <img
                className="imagen-delante imagen-publicidad"
                src="/img/05-img-costados-larga/0a.png"
                alt=""
              />
            </div>

            <div className="objetoCentrado1">
              <p>
                <a href="#">
                  <img
                    alt="icono"
                    className="container-fluid imagen-frente imagen-publicidad"
                    src="/img/05-img-costados-larga/16aicono.png"
                  />
                </a>
              </p>
            </div>
          </div>
        </main>

        <p id="telefonoWhattsapp">
          <a
            href="https://api.whatsapp.com/send?phone=..............&text=Hola!,%20en%20que%20puedo%20ayudarte?"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              alt="imgwhattsapp1"
              className="logoWhats textoMovimiento"
              src="/img/02-logos/logowhattsapp1.png"
            />
          </a>
        </p>
      </div>
    </>
  );
}

export default MainContent;
