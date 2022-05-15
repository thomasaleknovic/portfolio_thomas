import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact () {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_t100zmf', 'template_kas4clh', form.current, 'fa43rj5b0dL1JZ-lC')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
      <div id='contato' className='flex flex-col items-center pb-[40px] pt-[100px]'>
          <h2 className='text-mainPurple text-[50px] font-bold mb-10 text-center'>Vamos criar juntos?</h2>
          <div className='bg-mainPurple w-5/6 md:w-2/4 rounded-md p-10'>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col items-center text-mainBlack">
                <label className='text-white font-bold'>Nome</label>
                <input type="text" name="user_name" className='md:w-[400px] mb-6 mt-3 p-2 rounded-md'/>
                <label className='text-white font-bold'>Email</label>
                <input type="email" name="user_email" className='md:w-[400px] mb-6 mt-3 p-2 rounded-md' />
                <label className='text-white font-bold'>Mensagem</label>
                <textarea name="message" className='md:w-[400px] h-[200px] mb-6 mt-3 p-2 rounded-lg'/>
                <input type="submit" value="Enviar" className='bg-white rounded-full text-mainPurple w-3/4 md:w-2/4 p-2 font-bold'/>
            </form>
        </div>
    </div>
  );
};

export default Contact;