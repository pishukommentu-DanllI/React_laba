import React from 'react'
import { useState } from 'react';

export const Tasks = ({id, name, edit, dele, changeedit, changevalue, changedo, vup}) => {
  let [box, setBox] = useState(false);
  return (
    <li >
      <div className='BlockInputSpan'>
        <div className='Input'>
          <input type='checkbox' value={box} onChange={e => setBox(!box)}/>
        </div>
        <div className='Span' onChange={e => {changeedit(id)}}>
          <span className={box ? 'text' : ''} onClick={(e) => {changevalue(name);changeedit(id)}}>{name}</span>
        </div>
      </div>

      <div className='BlockDleete'>
        <button onClick={() => dele(id)} className={'delete_btn'}>Delete</button>
      </div>
      </li>
  )
}
