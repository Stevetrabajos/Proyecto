
import { initControler, initTemplate } from "./src/utils";
import "./style.css";
initTemplate();
//! --------> lo ponemos sin parametro para que salte al caso de switch de undefined para evaluar el user
/** no le metemos parametro en el initControler para que pueda asi
 * evaluar si tenemos usuario o no en el contexto de estados de nuestra app
 */

initControler();