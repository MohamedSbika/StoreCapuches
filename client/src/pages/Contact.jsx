import React,{useEffect,useState} from "react";
import ContactHeader from '../components/ContactHeader'
import Footer from '../components/Footer'
import Form from "../components/Form";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ContactHeader/>
      <Form/>
      <Footer/> 
    </div>
  )
}
