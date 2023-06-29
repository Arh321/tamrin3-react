


const Contact =({id,name,email,number,handleDelete}) =>{

    return(
        <div className="pt-2 pb-2 flex flex-row  items-center border-b border-gray-light">
            <div className="w-6 text-gray-light border-gray-light flex justify-center items-center">{id}</div>
            <div className="w-1/5 text-gray-light border-gray-light flex justify-center items-center">{name}</div>
            <div className="w-1/2 text-gray-light border-gray-light flex justify-center items-center">{email}</div>
            <div className="w-1/3 text-gray-light flex justify-center items-center">{number}</div>
            <button onClick={() => handleDelete(id)} className="w-6 h-6 text-gray-light flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 40 40"><path fill="currentColor" d="M21.499 19.994L32.755 8.727a1.064 1.064 0 0 0-.001-1.502c-.398-.396-1.099-.398-1.501.002L20 18.494L8.743 7.224c-.4-.395-1.101-.393-1.499.002a1.05 1.05 0 0 0-.309.751c0 .284.11.55.309.747L18.5 19.993L7.245 31.263a1.064 1.064 0 0 0 .003 1.503c.193.191.466.301.748.301h.006c.283-.001.556-.112.745-.305L20 21.495l11.257 11.27c.199.198.465.308.747.308a1.058 1.058 0 0 0 1.061-1.061c0-.283-.11-.55-.31-.747L21.499 19.994z"/></svg></button>
        </div>
    )
}

export default Contact;