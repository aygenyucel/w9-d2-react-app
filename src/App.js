import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import Myfooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import LatestRelease from "./components/LatestRelease";
import CartNav from "./components/CartNav";

function App() {
  return (
    <div className="App position-relative">
      <MyNavbar />
      <Welcome />
      <LatestRelease />
      <Myfooter />
      <CartNav />
    </div>
  );
}

{
  /* <></> => react fragment */
}
export default App;
