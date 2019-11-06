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

const rooms = [
  {
    id: "bedroom",
    name: "Bedroom",
    icon: faBed,
    default: true
  },
  {
    id: "floor1",
    name: "Floor I",
    icon: faCouch,
    default: false
  }
];

export default function RoomFilter(props) {

  return (
    <div className="room-filter">

      {rooms.map(
        (room) =>
        <Button key={room.id} outline color={props.activeRoomId === room.id ? "success" : "secondary"} onClick={() => props.setActiveRoomId(room.id)}>
          {room.name} <FontAwesomeIcon icon={room.icon} />
        </Button>
        )}

      {/* <Button outline color="secondary">
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
      </Button>{" "} */}
    </div>
  );
}
