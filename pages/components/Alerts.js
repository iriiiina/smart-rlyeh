// Bootstrap https://reactstrap.github.io
import "bootstrap/scss/bootstrap.scss";
import { Alert } from "reactstrap";
// Font Awesome https://github.com/FortAwesome/react-fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHistory } from "@fortawesome/free-solid-svg-icons";

export default function Alerts() {
  return (
    <Alert color="info">
      Last update: today 21:25:01
      <br />
      <a href="">
        Update manually <FontAwesomeIcon icon={faHistory} />
      </a>
    </Alert>
  );
}
