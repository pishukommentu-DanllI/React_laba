import React from 'react'
import { useState } from 'react';

export const App_jsx = ({id, name, edit, dele, changeedit, changevalue, changedo, vup}) => {
  let [box, setBox] = useState(false);
  console.log(box, 'asjhkzxfz')
  return (
    <li >
      <div className='BlockInputSpan'>
        <div className='Input'>
          <input type='checkbox' value={box} onClick={e => {setBox(e.target.value);console.log(e.target.value)}}/>
        </div>
        <div className='Span' onChange={e => {changeedit(id);changevalue(name)}}>
          <span className={box ? 'text' : ''}>{name}</span>
        </div>
      </div>

      <div className='BlockDleete'>
        <button onClick={() => dele(id)} className={'delete_btn'}>Delete</button>
      </div>
      </li>
  )
}
