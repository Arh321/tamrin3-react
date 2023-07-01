


const Input = ({type,handleName,handleEmail,handleNumber,value}) =>{

    return(
        <div className="w-full">
            <input 
      
      className="w-full pt-2 pb-2 bg-gray-medium text-gray-light font-xs border-b border-gray-light focus:outline-none placeholder:text-gray-light placeholder:text-2xl" 
            id={type} 
            type={type}
            value={value} 
            placeholder={type}
            onChange={(e) => {
                if(type == 'text'){
                    return handleName(e.target.value)
                }
                if(type == 'number'){
                    return handleNumber(e.target.value)
                }
                if(type == 'email'){
                    return handleEmail(e.target.value)
                }
            }}
            />
        </div>
    )
}

export default Input;