import { nanoid } from 'nanoid'
import { useState } from 'react';
import { Tasks } from './components/Tasks';
import './App.css';
function App() {
  const [tasks, setTasks] = useState([
    {id:nanoid(), name:'task 2', vup:false}
  ])
  const [edit, setEdit] = useState(null);
  const [ValueInput, setValueInput] = useState('')
  const list = tasks.map((e, index) => {
    return <Tasks key={index} id={e.id} name={e.name} edit={e.edit} dele={dele} changeedit={setEdit} changevalue={setValueInput} vup={e.vup} changedo={changedo}/>
  });

  function dele(id) {
    setTasks(tasks.filter(e => e.id !== id))
  }

  function add() {
    setValueInput('')
    setTasks([...tasks, {id:nanoid(), name:ValueInput, do:false}])
  }

  function changedo(id) {
    setTasks(tasks.map((e, index) => {
      if (e.id === edit) {
        return {...e, vup:!e.vup};
      } else {
        return e;
      }
    }))
  }
  function change() {
    setTasks(tasks.map((e, index) => {
      if (e.id === edit) {
        setEdit(null);
        setValueInput('');
        return {...e, name:ValueInput};
      } else {
        return e;
      }
    }))
  }
  return (
    <div className='contener'>
      <h1 className='MainText'>todos</h1>
      <div className='contner__Bloclinput'>
        <input className='contener__input' placeholder='Add Todo...' value={ValueInput} onChange={(e) => setValueInput(e.target.value)}/>
        <button className='sumbit' onClick={edit === null ? add : change}>sumbit</button>
      </div>
      
      <ul>
      {list}
      </ul>
    </div>
  );
}

export default App;
