import Contact from './Contact'
import Search from './Search'


const ContactList = ({list,search,onSearch,handleDelete}) =>{

    return(
        <div className='pr-2 pl-2 flex flex-col gap-2 '>
            <div className='m-4 w-full flex justify-between items-center flex-wrap text-gray-light'>
                <div className='pl-2 flex items-center font-bold text-lg'>
                    <p>Your Contact List</p>
                </div>
                <div className='w-1/2 mr-4'>
                    <Search onSearch={onSearch}/>
                </div>
                
            </div>
            <div className="pt-2 pb-2 flex flex-row  items-center bg-blue-dark rounded">
                    <div className="w-6 text-gray-light  border-gray-light flex justify-center items-center">n</div>
                    <div className="w-1/5 text-gray-light  border-gray-light flex justify-center items-center">name</div>
                    <div className="w-1/2 text-gray-light  border-gray-light flex justify-center items-center">email</div>
                    <div className="w-1/3 pl-14 text-gray-light flex items-center">number</div>
            
            </div>
            {
                list.filter((obj) => {
                    let letters = obj.nam + obj.em + obj.num
                    if(letters.includes(search)){
                        return obj
                    }
                })
                .map((obj) => {
                    return(
                        <Contact 
                        key={obj.id} 
                        name={obj.nam} 
                        email={obj.em} 
                        number={obj.num} 
                        id={obj.id}
                        handleDelete={handleDelete}
                        />
                    )
                })
            }
            
        </div>
    )
}
export default ContactList;