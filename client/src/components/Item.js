import React from 'react'

const Item = ({item, handleChange, handleDelete, handleToggle}) => {
  return (
    <div>
         <input type="text" value={item.name} onChange={handleChange} onBlur={handleChange} onKeyDown={(e)=> e.key === 'Enter' && handleChange(e)}/>
         <input type="checkbox" onClick={handleToggle} checked={item.need}/>
          <button onClick={handleDelete}> x </button>
    </div>
  )
}

export default Item