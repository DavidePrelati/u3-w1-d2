import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Welcome />
      <AllTheBooks className="d-flex align-items-center justify-between"/>
    </div>
  );
}

export default App;
