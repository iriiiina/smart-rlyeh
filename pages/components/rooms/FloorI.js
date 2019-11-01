// Bootstrap https://reactstrap.github.io
import "bootstrap/scss/bootstrap.scss";
import { CardDeck, Card, CardHeader, CardBody, CardText } from "reactstrap";
// Font Awesome https://github.com/FortAwesome/react-fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThermometerHalf,
  faTint,
  faCouch,
  faLightbulb,
  faCloudSun
} from "@fortawesome/free-solid-svg-icons";

export default function FloorI() {
  return (
    <div class="room">
      <h1>
        Floor I <FontAwesomeIcon icon={faCouch} />
      </h1>

      <CardDeck>
        <Card>
          <CardHeader>Temp</CardHeader>
          <CardBody>
            <CardText class="card-text">
              25.1&deg;C&nbsp;
              <FontAwesomeIcon icon={faThermometerHalf} />
            </CardText>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>Humidity</CardHeader>
          <CardBody>
            <CardText>
              39%&nbsp;
              <FontAwesomeIcon icon={faTint} />
            </CardText>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>Light</CardHeader>
          <CardBody>
            <CardText>
              3&nbsp;lux&nbsp;
              <FontAwesomeIcon icon={faLightbulb} />
            </CardText>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>UV</CardHeader>
          <CardBody>
            <CardText>
              0&nbsp;
              <FontAwesomeIcon icon={faCloudSun} />
            </CardText>
          </CardBody>
        </Card>
      </CardDeck>
    </div>
  );
}
