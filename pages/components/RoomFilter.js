// Bootstrap https://reactstrap.github.io
import "bootstrap/scss/bootstrap.scss";
import { Button } from "reactstrap";
// Font Awesome https://github.com/FortAwesome/react-fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCouch,
  faBath,
  faShower,
  faBabyCarriage,
  faShoePrints
} from "@fortawesome/free-solid-svg-icons";

export default function RoomFilter() {
  return (
    <div class="room-filter">
      <Button outline color="success">
        Bedroom <FontAwesomeIcon icon={faBed} />
      </Button>{" "}
      <Button outline color="success">
        Floor I <FontAwesomeIcon icon={faCouch} />
      </Button>{" "}
      <Button outline color="secondary">
        Kid's Room <FontAwesomeIcon icon={faBabyCarriage} />
      </Button>{" "}
      <Button outline color="secondary">
        Corridor <FontAwesomeIcon icon={faShoePrints} />
      </Button>{" "}
      <Button outline color="secondary">
        Bathroom I <FontAwesomeIcon icon={faShower} />
      </Button>{" "}
      <Button outline color="secondary">
        Bathroom II <FontAwesomeIcon icon={faBath} />
      </Button>{" "}
    </div>
  );
}
