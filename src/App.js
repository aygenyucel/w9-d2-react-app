import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import Myfooter from "./components/MyFooter";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Welcome />
      <Myfooter />
    </div>
  );
}

export default App;
