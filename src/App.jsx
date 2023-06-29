import { useState } from 'react'
import ContactForm from './components/Contactform'
import ContactList from './components/ContactList'

function App() {
  const [list,setList] = useState([])
  const [name,setName] = useState('')
  const [number,setNumber] = useState('')
  const [email,setEmail] = useState('')
  const [search,setSearch] = useState('')
  
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

  return(
    <div className='w-full min-h-screen flex flex-row'>
     <div className='basis-2/5 bg-purple flex flex-col justify-center items-center'>
        <ContactForm 
        handleEmail={handleEmail}
        handleName={handleName}
        handleNumber={handleNumber} 
        listHandle={listHandle}
        name={name}
        email={email}
        number={number}
        />
     </div>
     <div className='basis-3/5 bg-gray-dark'>
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
