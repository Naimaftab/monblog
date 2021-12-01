import React, { useState } from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import classNames from "../styles/pages/contact.module.css";

export const ContactUs = () => {
    //On fais des hocks pour tout les entrée de input
    const [name, setName] = useState("");
    const [subjet, setSubjet] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault(); // pour que tout sois bien mis dans les states
      //le template ID va aller recupérer les 4 valeur indiquer
      sendFeedback("template_91k9m1i", {
        name, //on récupére le states de name
        subjet,
        phone,
        email,
        message,
      });
    };
  
    const sendFeedback = (templateId, variables) => {
        //la fct sendfeeback passe par notre gmail, le template id et les 5 variables plus haut
        window.emailjs
        .send("service_exnwjpk", templateId, variables)
        .then((res) => { // Si ca marche on met un success et on reset tout
          console.log('success !');
          setName("");
          setSubjet("");
          setPhone("");
          setEmail("");
          setMessage("");
        })
        .catch( //Sinon on met un message erreur
          (err) =>
            document.querySelector('.form-message').innerHTML =
              "Une erreur s'est produite, veuillez réessayer.")
    };
  
    return (
    <div>
        <Navbar />
      <form className= {classNames.contactform}>
        <h2>Contactez-nous</h2>
        <div className= {classNames.formcontent}>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            placeholder=" Nom *"
            value={name}
            autoComplete="off"
          />
          <input
            type="text"
            id="phone"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            placeholder=" Téléphone"
            value={phone}
          />
          <input
            type="text"
            id="subjet"
            name="subjet"
            onChange={(e) => setSubjet(e.target.value)}
            placeholder=" Objet"
            value={subjet}
          />
            <input
              type="mail"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" Email *"
              value={email}
              autoComplete="off"
            />
          <textarea
            id="message"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            placeholder=" Message *"
            value={message}
          />
        </div>
        <div className={classNames.boxbutton}>
        <input
          className= {classNames.buttonsubmit}
          type="button"
          value="Envoyer"
          onClick={handleSubmit} // Quand on fais le handleSubmit on rentre dans le send feedback
        /></div>
        <div className="form-message"></div>
      </form>
      <Footer />
    </div>
    );


  };