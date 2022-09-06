import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Content from "./components/Content";
import background from "./images/background.jpg";

function App() {
  return (
    <div>
      <div style={{backgroundImage:`url(${background})`}}>
        <Header/>
        <Navigation/>
        <Content/>
      </div>
      
    </div>
  );
}

export default App;
