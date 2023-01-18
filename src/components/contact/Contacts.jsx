import React from "react";
import "../contact/Contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookMessenger } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { SlArrowUp } from "react-icons/sl";
import { useState } from "react";
import { useRef } from "react";
import emailjs from "emailjs-com";
import Nav from "../nav/Nav";

const Contacts = () => {
  const [activeNav, setActiveNav] = useState("#");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      // cleartapez la commande 'npm install emailjs-com --save'
      // allez sur emailjs React
      // information a recuperé sur emailjs

      .sendForm(
        "service_i4wd92t",
        "template_dpxw26g",
        form.current,
        "lYm7t0c7qL3NysJhq"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="contacts">
      <Nav/>
      <h5>Get in Touch</h5>
      <h2>Contacter moi !</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail className="contact_icon" />
            <h4>Email</h4>
            <h5>razik.bouiche@gmail.com</h5>
            <a href="mailto:razik.bouiche@gmail.com">Envoyer un message</a>
          </article>
          <article className="contact_option">
            <FaFacebookMessenger className="contact_icon" />
            <h4>Messenger</h4>
            <h5>Plus d'info</h5>
            <a href="https://m.me/leo.bouiche">Envoyer un message</a>
          </article>
          <article className="contact_option">
            <SiWhatsapp className="contact_icon" />
            <h4>Whatsapp</h4>
            <h5>Plus d'info</h5>
            <a href="https://api.whatsapp.com/send?phone=33652787437">
              Envoyer un message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            id="fname"
            name="name"
            placeholder="Nom & prénom"
            required
          />
          <input
            type="text"
            id="sujet"
            name="sujet"
            placeholder="Sujet"
            required
          />
          <input
            id="emailAddress"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <textarea
            id="subject"
            name="message"
            rows="7"
            cols="50"
          
            placeholder="Votre message"
          ></textarea>
          <button type="submit" className="btn btn_pimary">
            Envoyer
          </button>
        </form>
      </div>
      <a
        href="header"
        onClick={() => setActiveNav("#header")}
        className={activeNav === "#header" ? "active" : ""}
        target="blank"
        id="scroll"
      >
        <SlArrowUp />
      </a>
    </section>
  );
};
export default Contacts;
