
import './App.css';
import Logo from './componets/logo';
import Note from './componets/note';


function App() {
  return (
    <div className='app-note'>
      <Logo />
      <div className='main-list'>
        <h1> Mis Tareas</h1>
        <Note />
      </div>
      
    </div>
  );
}

export default App;
