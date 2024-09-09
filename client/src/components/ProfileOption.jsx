import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
import { signoutFailed, signoutSuccess } from '../redux/user/userSlice';
import { ToastContainer, toast } from 'react-toastify';
import { clearSavedProduit } from '../redux/saveProduit/saveProduitSlice';
import {  FaSignOutAlt, FaUser ,FaTicketAlt,FaShoppingCart} from 'react-icons/fa';

const ProfileOption = ({ user }) => {
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
                        <Link to={'/profile'} className="justify-start text-black">
                            <FaUser className='text-gray-800' /> Profile
                        </Link>
                    </li>
                    <li>
                        <Link to={`/Ticket`} className="justify-start text-black">
                            <FaTicketAlt className='text-gray-800' /> Ticket Des Produits
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

export default ProfileOption;