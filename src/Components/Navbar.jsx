import React , {useState} from 'react'


function Navbar() {
    const [is,set] = useState(false)
  return (
    <div className=' 	p-5'>
     <div className="text-white flex flex-row bg-black justify-between"> <div>
            <a href='/'><h1 className='text-xl'>M.Grissa</h1></a>
        </div>
        <div>
        {is ?<i  onClick={() => set(!is)} class="fa-solid text-xl fa-xmark cursor-pointer"></i>:<i  onClick={() => set(!is)} className="fa-solid cursor-pointer fa-bars text-xl"></i>}
        </div></div>
       
         {is&& <div className='h-screen mt-[-40px] w-screen text-white z-999  bg-black flex flex-col justify-center items-center  '>
          <a href="/">
            <h1 className='text-8xl m-6'>Home</h1>
          </a>
          <a href="/portfolio">
            <h1 className='text-8xl m-6'>Portfolio</h1>
          </a><a href="/contact">
            <h1 className='text-8xl m-6'>Contact Me</h1>
          </a>
          <div className='ml-3 mb-3 absolute bottom-0 left-0 flex flex-col'>
               <a className='text-2xl' href='https://www.linkedin.com/in/mohamed-grissa/'> <i class="fa-brands fa-linkedin text-2xl"></i> Linkedin</a>
            
          </div>
        </div>
         }
    </div>
  )
}

export default Navbar