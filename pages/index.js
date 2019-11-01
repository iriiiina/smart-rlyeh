// Next.js + Sass https://github.com/zeit/next-plugins/tree/master/packages/next-sass
import "../styles.scss";
// Components
import Alerts from "./components/Alerts";
import RoomFilter from "./components/RoomFilter";
import Bedroom from "./components/rooms/Bedroom";
import FloorI from "./components/rooms/FloorI";

const Index = () => (
  <div class="body">
    <Alerts />

    <RoomFilter />

    <Bedroom />
    <FloorI />
  </div>
);

export default Index;
