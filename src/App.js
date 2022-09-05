import Header from "./components/Header";
import Navigation from "./components/Navigation";
import background from "./images/background.jpg";

function App() {
  return (
    <div>
      <div style={{backgroundImage:`url(${background})`}}>
        <Header/>
        <Navigation/>
      </div>
      
    </div>
  );
}

export default App;
