import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import { Link } from 'react-router-dom'
import { signoutFailed, signoutSuccess } from '../redux/user/userSlice';
import { ToastContainer, toast } from 'react-toastify';
import { clearSavedProduit } from '../redux/saveProduit/saveProduitSlice';
import {  FaSignOutAlt, FaUser ,FaTicketAlt,FaShoppingCart,FaHome} from 'react-icons/fa';

const ProfileOptionAdmin = ({ user }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const {pathname}=location;
    const { currentUser } = useSelector((state) => state.user);

    const dispatch = useDispatch();

    const handleLogOut = async () => {
        try {
            const res = await fetch('http://localhost:4000/abdellino/auth/signout');
            const data = await res.json();
            if (data.success === false) {
                useDispatch(signoutFailed(data.message))
                toast.error(data.message, {
                    autoClose: 2000,
                })
            }
            else {
                dispatch(signoutSuccess())
                dispatch(clearSavedProduit())
            }
        } catch (error) {
            dispatch(signoutFailed(error.message))
            toast.error(error.message, {
                autoClose: 2000,
            })
        }
    }




    return (
        <div className="flex-none gap-2 z-12">
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar hover:outline-0 hover:border-0">
                    <div className="w-7 rounded-full">
                        <img className='rounded-full border border-brand-blue/20 h-8 w-8 object-cover' src={user.avatar} alt="profile image" />
                    </div>
                </label>
                <ul tabIndex={0} className="mt-3 z-[999999999] font-heading p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-md w-52 ">
                    <li className="justify-start text-black text-center">
                        {currentUser.username}
                    </li>
                    <li>
                        <Link to={'/admin'} className="hidden lg:flex justify-start text-black">
                            <FaHome className='text-gray-800' /> DashBoard
                        </Link>
                    </li>

                    <li>
                        <Link to={"/admin"} className={`lg:hidden hover:bg-red-500/50 justify-start text-black ${ pathname==="/admin" && "bg-gray-900 text-white" } `}>
                            Statistiques
                        </Link>
                    </li>
                    <li>
                        <Link to={"/admin/profile"} className={`lg:hidden hover:bg-red-500/50 justify-start text-black ${ pathname.includes('profile') && "bg-gray-900 text-white" } `}>
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link to={"/admin/produits"} className={`lg:hidden hover:bg-red-500/50 justify-start text-black ${ pathname.includes('produits') && "bg-gray-900 text-white" } `}>
                            Produits
                        </Link>
                    </li>
                    <li>
                        <Link to={"/admin/ticketsP"} className={`lg:hidden hover:bg-red-500/50 justify-start text-black ${ pathname.includes('ticketsP') && "bg-gray-900 text-white" } `}>
                        Commande Produit
                        </Link>
                    </li>
                    <li onClick={handleLogOut} >
                        <Link to={"/"} className="justify-start text-red-500">
                            <FaSignOutAlt className='text-red-500' /> Deconnexion
                        </Link>
                    </li>
                    
                </ul>
            </div>
            
            <ToastContainer />
        </div>
    )
};

export default ProfileOptionAdmin;