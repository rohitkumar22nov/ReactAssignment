import UserChoice from "./components/UserChoice";
import './style.css'

import '../src/'


function App() {
  return (
    <div className="App">
      <h1 className="heading"> <span className="rockHead">Rock</span>  <span className="paperHead">Paper</span> <span className="scissorHead">Scissor</span>  </h1>
      <UserChoice />
    </div>
  );
}

export default App;
