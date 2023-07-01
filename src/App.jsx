import { useState } from 'react'
import ContactForm from './components/Contactform'
import ContactList from './components/ContactList'
import { AddIcon } from './components/Add'


function App() {
  const [list,setList] = useState([])
  const [name,setName] = useState('')
  const [number,setNumber] = useState('')
  const [email,setEmail] = useState('')
  const [search,setSearch] = useState('')
  const [isActive, setIsActive] = useState(false);
  
  function handleName (name){
    setName(name)
  }
  function handleEmail (email){
    setEmail(email)
  }
  function handleNumber (number){
    setNumber(number)
  }
  const onSubmit = () => {
    setName("");
    setEmail('');
    setNumber('');
    setIsActive(current => !current);
  };

  function listHandle (name,email,number){
    if(name != '' || email != '' || number != ''){
      setList([...list,{nam:name,em:email,num:number,id:list.length + 1}])
    }
    
    onSubmit();
  
  }

  function handleDelete (id){
    const newList = list.filter((obj) => obj.id !== id)
    
    setList([...newList])
  }

  function onSearch (e){
    setSearch(e.target.value.toLowerCase())
  }
  function handleActiv() {
    setIsActive(current => !current);
  }

  return(
    <div className='max-w-full h-screen flex flex-row relative'>
     
        <ContactForm 
        handleEmail={handleEmail}
        handleName={handleName}
        handleNumber={handleNumber} 
        listHandle={listHandle}
        name={name}
        email={email}
        number={number}
        isActive={isActive}
        />
     
     <AddIcon handleActiv={handleActiv}/>
     <div className='w-full h-full bg-gray-800'>
        <ContactList 
        list={list}
        search={search}
        onSearch={onSearch}
        handleDelete={handleDelete}
        />
     </div>
    </div>
  )
}

export default App
