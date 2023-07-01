


const Search = ({onSearch}) =>{

    return(
        <form className=" flex flex-ro gap-3 border rounded">
            <label className="flex justify-center items-center" htmlFor="search"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M14.385 15.446a6.75 6.75 0 1 1 1.06-1.06l5.156 5.155a.75.75 0 1 1-1.06 1.06l-5.156-5.155Zm-7.926-1.562a5.25 5.25 0 1 1 7.43-.005l-.005.005l-.005.004a5.25 5.25 0 0 1-7.42-.004Z" clip-rule="evenodd"/></svg></label>
            <input 
            className="bg-gray-800 w-full  focus:outline-none placeholder:text-sm" 
            onChange={(e) => onSearch(e)} 
            id="search" 
            type="text" 
            placeholder="Search Contact"
            />
        </form>
    )
}

export default Search;