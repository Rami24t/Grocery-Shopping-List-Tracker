import React, {useState} from 'react'

const Item = ({item, handleDelete, handleToggle, handleSave}) => {
  const handleEdit = (e) => {
    e.preventDefault()
    e.target.parentNode.firstChild.disabled = false;
    e.target.parentNode.firstChild.focus();
    console.log('edit')
  }
  
  const handleBlur = (e) => {
    e.preventDefault()
    e.target.disabled = true;
    handleSave(e);
    console.log('blur')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.target.disabled = true;
      handleSave(e);
    }
    console.log('keydown')
  }

  const handleCheck = (item) => {
    setNeeded(!needed);
    handleToggle(item);
    console.log('toggle')
  }

  const handleChange = (e) => {
    
    setName(e.target.value)
    console.log('change')
  }
  
  const [needed, setNeeded] = useState(item.need)
  const [name, setName] = useState(item.name)

  return (
    <div>
           <input type="text" disabled={true} name='name' value={name} onChange={handleChange} onBlur={handleBlur} onKeyDown={handleKeyDown} />
           <input type="checkbox" onChange={()=>handleCheck(item)} checked={needed}/>
           <button type='button' onClick={handleEdit}>  -| </button>
          <button onClick={handleDelete}> x </button>
    </div>
  )
}

export default Item