import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import Myfooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import LatestRelease from "./components/LatestRelease";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Welcome />
      <LatestRelease />
      <Myfooter />
    </div>
  );
}

export default App;
