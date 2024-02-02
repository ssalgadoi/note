
import './App.css';
import Logo from './img/logo.png'

function App() {
  return (
    <div className='app-note'>
      <div className='logo-container'>
        <img 
          src={ Logo } 
          className='logo' 
          alt='Logo' 
        />
      </div>
    </div>
  );
}

export default App;
