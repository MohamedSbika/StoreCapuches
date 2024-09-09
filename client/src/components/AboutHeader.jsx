import React from 'react'



export default function AboutHeader() {
  return (
    
    
    <div>
        <div className='lg:grid lg:grid-cols-2 mb-10'>
          <div className='col-span-1 p-4 items-center'>
              <h1 className='text-red-500  font-bold text-3xl '>A PROPOS DE NOUS</h1>
              <p className=' mt-4 text-justify text-md lg:text-xl font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea praesentium commodi molestias hic illo odit quam in placeat tempora, consequuntur et dolores odio laborum porro culpa soluta, cupiditate maxime ipsa!</p>
          </div>
          <div className='col-span-1 justify-center text-center'>
            
          </div>
      </div>

      <div className='lg:grid lg:grid-cols-2 mb-10'>
        <div className='hidden lg:block col-span-1 justify-center text-center'>
            
          </div>
          <div className='col-span-1 p-4 items-center'>
              <h1 className='text-red-500  font-bold text-3xl '>Notre Histoire</h1>
              <p className='mt-4 text-justify text-md lg:text-xl font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea praesentium commodi molestias hic illo odit quam in placeat tempora, consequuntur et dolores odio laborum porro culpa soluta, cupiditate maxime ipsa!</p>
          </div>
          <div className='nlock lg:hidden col-span-1 justify-center text-center'>
            
          </div>
      </div>


        <div className='lg:grid lg:grid-cols-2'>
          <div className='col-span-1 p-4 items-center'>
              <h1 className='text-red-500  font-bold text-3xl '>Nos succès </h1>
              <p className='mt-4 text-justify text-md lg:text-xl font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea praesentium commodi molestias hic illo odit quam in placeat tempora, consequuntur et dolores odio laborum porro culpa soluta, cupiditate maxime ipsa!</p>
          </div>

          <div className='col-span-1 justify-center text-center'>
            
          </div>
        </div>  
    </div>
  )
}
