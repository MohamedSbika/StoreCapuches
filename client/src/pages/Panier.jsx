import React, { useEffect, useState } from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import ProduitCard from '../components/ProduitCard';
import Footer from '../components/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { updateArray } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

const Panier = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { saveProduits } = useSelector(state => state.savedProduit);
    
    const [quantities, setQuantities] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        setQuantities(saveProduits.map(produit => ({
            id: produit._id,
            name: produit.title,
            quantity: 1,
            price: produit.offer ? produit.discountPrix : produit.prix
        })));
    }, [saveProduits]);

    const handleQuantityChange = (id, quantity) => {
        setQuantities(prevQuantities =>
            prevQuantities.map(item =>
                item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item
            )
        );
    };

    const increment = (id) => {
        setQuantities(prevQuantities =>
            prevQuantities.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decrement = (id) => {
        setQuantities(prevQuantities =>
            prevQuantities.map(item =>
                item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
            )
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateArray(quantities));
        navigate('/formulaire');
    };

    const calculateTotalPrice = () => {
        return quantities.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);
    };

    const paginate = (items) => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return items.slice(startIndex, startIndex + itemsPerPage);
    };

    const handleNextPage = () => {
        setCurrentPage(prev => prev + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage(prev => (prev > 1 ? prev - 1 : 1));
    };

    const filteredProduits = saveProduits.filter(produit =>
        produit.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div className='h-24 w-full bg-white'></div>
            <section className='pt-32'>
                <div className='grid md:grid-cols-2 lg:grid-cols-3'>
                    <div className='text-xl col-span-1 flex items-center text-center justify-center pb-4 md:text-5xl font-bold'>
                        VOTRE PANIER
                    </div>

                </div>

                <div className='pb-10 pt-2'>
                    {quantities.length === 0 ? (
                        <div className='mt-40 flex items-center justify-center flex-col'>
                            <FaAngleDoubleRight className='font-3xl text-[#3A5A40] font-bold text-xl text-center' />
                            <p className='font-heading text-lg text-center text-[#3A5A40]'>
                                Votre panier est vide
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 px-5 gap-y-8'>
                                {paginate(filteredProduits).map(produit => {
                                    const quantityObject = quantities.find(item => item.id === produit._id);
                                    const quantity = quantityObject ? quantityObject.quantity : 1;
                                    return (
                                        <div key={produit._id} className=''>
                                            <ProduitCard produit={produit} />
                                            <div className="flex items-center justify-center mt-4">
                                                <button
                                                    className="px-3 py-2 text-xl bg-gray-200 text-gray-500 border-0 rounded-l-lg hover:bg-gray-300"
                                                    type="button"
                                                    onClick={() => decrement(produit._id)}
                                                >
                                                    &mdash;
                                                </button>
                                                <input
                                                    className="w-16 px-3 py-2 text-xl text-center border-0"
                                                    type="number"
                                                    value={quantity}
                                                    onChange={e => handleQuantityChange(produit._id, parseInt(e.target.value, 10))}
                                                />
                                                <button
                                                    className="px-3 py-2 text-xl bg-gray-200 text-gray-500 border-0 rounded-r-lg hover:bg-gray-300"
                                                    type="button"
                                                    onClick={() => increment(produit._id)}
                                                >
                                                    &#xff0b;
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className='text-center mt-8'>
                                <p className='text-lg font-bold'>Prix total: {calculateTotalPrice()}</p>
                                <button type="submit" className='mt-4 px-6 py-3 bg-black hover:bg-gray-800 text-white rounded-md'>
                                    Passer Commande
                                </button>
                            </div>
                           
                        </form>
                    )}
                </div>
            </section>
            <Footer />
        </>
    );
}; 


export default Panier;
