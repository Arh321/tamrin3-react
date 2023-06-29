

const Button = ({listHandle,name,email,number}) =>{

    return(
        <div className="w-full  flex justify-center items-center">
            <button onClick={() => listHandle(name,email,number)} className="w-2/3 p-2 mt-10 text-white bg-blue-dark active:bg-blue">Add Contact</button>
        </div>
    )
}

export default Button;