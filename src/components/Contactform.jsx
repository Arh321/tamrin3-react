import { useState } from "react"
import Input from "./Input"
import Button from "./Button"
const ContactForm = ({handleName,handleEmail,handleNumber,name,email,number,listHandle,isActive}) =>{
    let values = [name,number,email]
    const [types,setTypes] = useState([
        'text', 'number', 'email'
    ])
    
 
    return(
        <div 
        className={isActive ? 'inpu__box2' : 'inpu__box'}>
            <p className=" pt-4 font-bold text-2xl text-white flex justify-center items-center">Add your contact</p>
            <form className="w-full p-6 flex flex-col gap-8">
                {
                    types.map((type,index) => {
                        return(
                            <Input
                            key={index}
                            type={type}
                            value={values[index]}
                            handleEmail={handleEmail}
                            handleName={handleName}
                            handleNumber={handleNumber}
                            />
                        )
                    })
                }
                
            </form>
            <Button
            listHandle={listHandle}
            name={name}
            email={email}
            number={number}
            />
        </div>
    )
}

export default ContactForm;