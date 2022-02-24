import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Hello from './components/Hello'
import FunctionClick  from './components/FunctionClick'
import NameList from './components/NameList'
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import './appStyles.css'
import styles from './appStyles.module.css'

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
        {/* <FunctionClick/> */}
        {/* <NameList/> */}
        {/* <Stylesheet primary={true}/> */}
        <Inline/>
        <h1 className="error">Error</h1>
        <h1 className={styles.success}>Success</h1>
    </div>
  );
}

export default App;
