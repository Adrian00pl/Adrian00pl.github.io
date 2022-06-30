import logo from './logo.svg';
import './App.css';
import './NavbarCom'
import NavbarCom from './NavbarCom';
import BodyCom from './BodyCom';

function App() {
  return (
    <div className="App">
        <NavbarCom/>
            <div>
      <BodyCom/>
    </div>
    </div>

  );
}

export default App;
