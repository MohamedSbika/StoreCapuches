import React from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import bg from '../img/bg-header.png'
import { useLocation } from 'react-router-dom'


export default function Admin() {
    const navigate = useNavigate();
    const location = useLocation();
    const {pathname}=location;
  return (
    <div className='h-auto   '>
        <div className='h-32 w-full bg-gray-100'></div>
        <div className=' lg:grid lg:grid-cols-12 h-screen -mt-32 '>
            <div className='col-span-2  pt-32 px-1 hidden lg:block bg-gray-100'>
                <button onClick={()=>navigate('/admin')} 
                    className={`  text-white relative h-14 mb-1 w-full text-center bg-black/50 rounded-lg text-xl items-center justify-center flex font-bold 
                        ${ pathname==="/admin" && "bg-black/90 text-white" }
                        `}                     
                    >Home</button>
                <button onClick={()=>navigate('/admin/profile')} 
                    className={` text-white relative h-14 mb-1 w-full text-center bg-black/50 rounded-lg text-xl items-center justify-center flex font-bold 
                        ${pathname.includes('profile') && "bg-black/90 text-white" }
                        `}
                      
                    >Profile</button>
                <button onClick={()=>navigate('/admin/produits')}
                    className={` text-white w-full h-14 mb-1 text-center bg-black/50 rounded-lg text-xl items-center justify-center flex font-bold 
                        ${pathname.includes('produits') && 'bg-black/90 text-white'}
                        `}
                    >Produits</button>
                <button onClick={()=>navigate('/admin/ticketsP')}
                    className={`text-white w-full h-14 mb-1 text-center bg-black/50 rounded-lg text-xl items-center justify-center flex font-bold
                        ${pathname.includes('ticketsP') && 'bg-black/90 text-white'}
                            `}
                    >Commande Produit</button>
            </div>
            <div className='col-span-10 mt-32  '>
                {<Outlet/>}
            </div>
        </div>
      
      
    </div>
  )
}
