import React, {useState} from 'react'

const Item = ({item, handleDelete, handleToggle, updateItem}) => {
  const handleEdit = (e) => {
    e.preventDefault()
    e.target.parentNode.firstChild.disabled = false;
    e.target.parentNode.firstChild.focus();
    console.log('edit')
  }
  
  const handleBlur = (e) => {
    e.preventDefault()
    e.target.disabled = true;
    handleUpdate(e);
    console.log('Handled blur')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.target.disabled = true;
      handleUpdate(e);
      console.log('Handled Enter Keydown')
    }
  }

  const handleUpdate = (e) => {
    const value = e.target.value.trim();
    if (value === "") {
      e.target.value = item.name;
      return;
    }
    if (item.name === value) return;
    setName(value);
    updateItem(item, {name : value});
    console.log('update')

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
          <button onClick={()=>handleDelete(item)}> x </button>
    </div>
  )
}

export default Item