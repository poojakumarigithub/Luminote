import React, { useRef } from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Header = () => {
    const {setInput,input} = useAppContext();
    const inputRef = useRef()
    const onSubmitHandler = async (e)=>{
        e.preventDefault();
        setInput(inputRef.current.value)
    }
    const onClear = ()=>{
        setInput('')
        inputRef.current.value = ''
    }
  return (
    <div className='mx-8 sm:mx-16 xl:mx-24 relative'>
        <div className='mt-20 mb-8 text-center'>

            <div className='inline-flex items-center gap-4 justify-center px-6 py-1.5 border border-primary/40
             bg-primary/10 rounded-full mb-4 text-sm text-primary'>
                <p>New : AI Feautured BlogSite</p>
                <img src={assets.star_icon} className='w-2.5' alt="" />
            </div>
            <h1 className='text-3xl sm:text-6xl font-semibold sm:leadind-16 text-gray-700'>Your own <br />
                  <span className='text-primary'>blogging</span> platform <span className="text-primary">"Luminote"</span>
            </h1>
            <p className="mt-6 text-base text-gray-600 max-w-2xl mx-auto">
                Luminote empowers you to share your thoughts, stories, and expertise with the world. Effortlessly create, edit, and manage your own blog posts with
                our intuitive AI-powered tools. Join a vibrant community of writers and readers, and let your voice shine!
            </p>

            <form onSubmit={onSubmitHandler} className='flex justify-between mt-4 max-w-lg max-sm:sclae-75 mx-auto border border-gray-800 bg-white rounded overflow-hidden' >
                <input ref={inputRef} type="text" placeholder='Search for blogs' className='w-full pl-4 outline-none' required/>
                <button type="submit" className='bg-primary text-white px-8 py-2 m-1.5 
                    rounded hover:scale-105 transition-all cursor-pointer
                '>Search</button>
            </form>

        </div>
        <div className='text-center'>
            {input && <button onClick={onClear} className='border font-light text-xs py-1 px-3 rounded-sm shadow-custom-sm
                cursor-pointer
            '>Clear Search</button>}
        </div>
        <img src={assets.gradientBackground} alt="" className='absolute -top-50 -z-1 opacity-50'/>
    </div>
  )
}

export default Header