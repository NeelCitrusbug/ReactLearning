import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Hello from './components/Hello'
import FunctionClick  from './components/FunctionClick';

function App() {
  return (
    <div className="App">
        {/* <Greet name="Bruce" heroName="Batman">
          <p>This is children props</p>
          </Greet>
        <Greet name="Clark" heroName="Superman">
          <button>Action</button>
          </Greet>
        <Greet name="Diana" heroName="Wonder Woman"/> */}
        {/* <Hello /> */}
        <FunctionClick/>
    </div>
  );
}

export default App;
