import './App.css';
import ListaDeTareas from './components/ListaDeTareas';
import LogoToDo from './images/todolist.jpg'

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='contenedor-logo'>
        <img
          src={LogoToDo}
          className='logo'
          alt='Logo toDo'
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
