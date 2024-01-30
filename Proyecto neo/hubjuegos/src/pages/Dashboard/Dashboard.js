// Dashboard.js -----> src/pages/Dashboard/Dashboard.js
import { getInfo, initControler } from "../../utils";
import "./Dashboard.css";

const template = () => `
  <div id="containerDashboard">
    <ul>
      <li>
        <figure id="navigatePokemon">
          <img
            src="https://cdn.kobo.com/book-images/c31f89e9-7726-4ef2-9691-031c5e52f15d/353/569/90/False/the-complete-pokemon-pokedex.jpg"
            alt="go to page pokemon"
          />
          <h2>POKEMON</h2>
        </figure>
      </li>
      <li>
      <figure id="3enraya">
          <img
            src="https://media.istockphoto.com/id/1299481774/es/vector/brillante-l%C3%ADnea-de-ne%C3%B3n-tic-tac-icono-de-juego-de-dedos-aislado-sobre-fondo-negro-vector.jpg?s=612x612&w=0&k=20&c=kGSb1o5kWX1JW1Sc5TQoC3GMIbX8Pj9W94_fHoolCDk="
            alt="go to three in a row"
          />
          <h2>three in a row</h2>
        </figure>
      </li>
      <li>
        <figure>
          <img
            src="https://res.cloudinary.com/dq186ej4c/image/upload/v1689761735/6168776_kfna36.png"
            alt="go to memory game"
          />
          <h2>MEMORY GAME</h2>
        </figure>
      </li>
    </ul>
  </div>
`;

const addEventListeners = () => {
  /** le damos el evento al boton de pokemon que es la unica pagina de contenido por
   * ahora esta creada en el proyecto
   */
  const navigatePokemon = document.getElementById("navigatePokemon");
  navigatePokemon.addEventListener("click", () => {
    initControler("Pokemon");
  });
};

const addEventListeners1 = () => {
  /** le damos el evento al boton de pokemon que es la unica pagina de contenido por
   * ahora esta creada en el proyecto
   */
  const navigatePokemon = document.getElementById("3enraya");
  navigatePokemon.addEventListener("click", () => {
    initControler("3enraya");
  });
};

export const printTemplateDashboard = () => {
  /** Como siempre las paginas se renderizan en el main por lo cual inyectamos el template en el contenedor del main */
  document.querySelector("main").innerHTML = template();

  /** Para la nav, que la habiamos ocultado en el login, la volvemos a renderizar cambiandole el display de none a flex */
  document.querySelector("nav").style.display = "flex";

  /** metemos los escuchadores de la pagina */
  addEventListeners();

  /** y por ultimo traemos la info que hace la llamada asincrona a la api de pokemon y lo setea en el estado
   */
//--------------------------------------------- LO NUEVO -------------------------
  getInfo();
//---------------------------------------------------------------------------------
};