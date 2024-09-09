
import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Form() {

    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        message: '',
    });

    useEffect(() => {
        AOS.init({
            duration: 1200, 
        });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            from_email: formData.email,
            message: formData.message,
            subject: formData.subject,
            to_name: "abdellino"
        };

        emailjs.send('service_tspmn3e', 'template_mga2fmd', templateParams, '-xHtQ4ZSsPIab7nsU')
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
            }, (error) => {
                console.log(error.text);
                alert('Failed to send message. Please try again later.');
            });
    };
    return (
        <div className='px-4 mb-16'>
            
                <div className=" gap-16 items-center relative overflow-hidden p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl max-w-6xl mx-auto bg-white mt-4 font-[sans-serif] before:absolute before:right-0 before:w-[300px] before:h-full max-md:before:hidden"
                data-aos="fade-up">
                    <form onSubmit={handleSubmit} data-aos="fade-right">
                        <div className="space-y-4 mt-8">
                            <div className="  gap-6">
                                
                                <div>
                                    <label className="mb-2 text-base block">EMAIL</label>
                                    <input 
                                        type='email' 
                                        name='email'
                                        placeholder='EMAIL'
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="px-4 py-2.5 text-base rounded-md bg-white border border-gray-400 w-full outline-black" 
                                    />
                                </div>
                            </div>
                            <div className="gap-6">
                                <div>
                                    <label className="mb-2 text-base block">SUJET</label>
                                    <input 
                                        type='text' 
                                        name='subject'
                                        placeholder='SUJET'
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="px-4 py-2.5 text-base rounded-md bg-white border border-gray-400 w-full outline-black" 
                                    />
                                </div>
                                
                            </div>
                            <textarea 
                                rows={10} 
                                name='message'
                                placeholder=" Message"
                                value={formData.message}
                                onChange={handleChange}
                                className="px-2 pt-3 rounded-md bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-black outline-none"
                                data-aos="fade-left"
                            ></textarea>
                        </div>
                        <button type="submit"
                            className="mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 py-3 bg-black hover:bg-gray-600 text-white"
                            data-aos="zoom-in"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff' className="mr-2"
                                viewBox="0 0 548.244 548.244">
                                <path fillRule="evenodd"
                                    d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                                    clipRule="evenodd" data-original="#000000" />
                            </svg>
                            Send Message
                        </button>
                    </form>
                </div>
            
        </div>
    )           
}
