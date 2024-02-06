
import './App.css';
import Logo from './componets/logo';
import NoteLists from './componets/notelists';


function App() {
  return (
    <div className='app-note'>
      <Logo />
      <div className='main-list'>
        <h1> Mis Tareas</h1>
        <NoteLists />
      </div>
      
    </div>
  );
}

export default App;
