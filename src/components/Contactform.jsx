import { useState } from "react"
import Input from "./Input"
import Button from "./Button"
const ContactForm = ({handleName,handleEmail,handleNumber,name,email,number,listHandle}) =>{
    let values = [name,number,email]
    const [types,setTypes] = useState([
        'text', 'number', 'email'
    ])
    

    return(
        <div className="pt-4 pb-14 w-2/3 border border-gray-light rounded shadow-2xl">
            <p className=" pt-4 text-base font-bold text-white flex justify-center items-center">Add your contact</p>
            <form className="w-full p-6 flex flex-col gap-4">
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