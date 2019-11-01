// Bootstrap https://reactstrap.github.io
import "bootstrap/scss/bootstrap.scss";
import { CardDeck, Card, CardHeader, CardBody, CardText } from "reactstrap";
// Font Awesome https://github.com/FortAwesome/react-fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faThermometerHalf,
  faTint
} from "@fortawesome/free-solid-svg-icons";
import { faEnvira } from "@fortawesome/free-brands-svg-icons";

export default function Bedroom() {
  return (
    <div class="room">
      <h1>
        Bedroom <FontAwesomeIcon icon={faBed} />
      </h1>

      <CardDeck>
        <Card>
          <CardHeader>Temp</CardHeader>
          <CardBody>
            <CardText class="card-text">
              24.5&deg;C&nbsp;
              <FontAwesomeIcon icon={faThermometerHalf} />
            </CardText>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>Humidity</CardHeader>
          <CardBody>
            <CardText>
              41%&nbsp;
              <FontAwesomeIcon icon={faTint} />
            </CardText>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>CO2</CardHeader>
          <CardBody>
            <CardText>
              658&nbsp;ppm&nbsp;
              <FontAwesomeIcon icon={faEnvira} />
            </CardText>
          </CardBody>
        </Card>
      </CardDeck>
    </div>
  );
}
