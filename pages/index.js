// Next.js + Sass https://github.com/zeit/next-plugins/tree/master/packages/next-sass
import "../styles.scss";
// Components
import Alerts from "./components/Alerts";
import RoomFilter from "./components/RoomFilter";
import Bedroom from "./components/rooms/Bedroom";
import FloorI from "./components/rooms/FloorI";

const Index = () => {

  const [activeRoomId, setActiveRoomId] = React.useState("bedroom");
  console.log({activeRoomId});

  return (<div className="body">
    <Alerts />

    <RoomFilter setActiveRoomId={setActiveRoomId} activeRoomId={activeRoomId}/>

    {activeRoomId === "bedroom" && <Bedroom />}
    {activeRoomId === "floor1" && <FloorI />}
  </div>);
}

export default Index;
