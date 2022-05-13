
import { BrowserRouter } from "react-router-dom";
import Main from "./MainComponent";

function App() {
  return (

      <div className="App">
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </div>
    
  );
}

export default App;
