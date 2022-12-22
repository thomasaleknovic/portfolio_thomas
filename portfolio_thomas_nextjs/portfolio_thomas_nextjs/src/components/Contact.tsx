import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef<
    string | HTMLFormElement | React.RefObject<HTMLElement>
  >();
  const [nameError, setNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [email, setEmail] = useState<boolean>(false);
  const [name, setName] = useState<boolean>(false);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (email && name) {
      emailjs
        .sendForm(
          "service_31qmlfw",
          "template_kas4clh",
          JSON.stringify(form.current),
          "fa43rj5b0dL1JZ-lC"
        )
        .then(
          (result) => {
            alert("Mensagem enviada!");
          },
          (error) => {
            alert("Recarregue a página e tente novamente!");
          }
        );
    } else {
      alert("Preencha os campos solicitados!");
    }
  };

  function validateName(value: string) {
    if (value.length === 0) {
      setNameError("Preencha seu nome");
      setName(false);
    } else {
      setNameError(null);
      setName(true);
    }
  }

  function validateEmail(value: string) {
    if (value.length === 0) {
      setEmailError("Preencha seu email");
    } else if (
      !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi.test(
        value
      )
    ) {
      setEmailError("Insira um email válido");
      setEmail(false);
    } else {
      setEmailError(null);
      setEmail(true);
    }
  }

  function handleBlur({ target }: React.ChangeEvent<HTMLInputElement>) {
    if (target.name === "user_name") {
      validateName(target.value);
    } else if (target.name === "user_email") {
      validateEmail(target.value);
    }
  }

  return (
    <div
      id="contato"
      className="flex flex-col items-center pb-[40px] pt-[100px]"
    >
      <h2 className="text-mainPurple text-[50px] font-bold mb-10 text-center">
        Vamos criar juntos?
      </h2>
      <div className="bg-mainPurple w-5/6 md:w-2/4 rounded-md p-10">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-center text-mainBlack"
        >
          <label className="text-white font-bold">Nome</label>
          <input
            onBlur={handleBlur}
            type="text"
            name="user_name"
            className={`md:w-[400px] text-center mb-2 mt-3 p-3 rounded-md ${
              nameError ? "shadow-[0px_0px_10px] shadow-red-700" : ""
            }`}
          />
          <p className="font-bold text-red-600 mb-6">{nameError}</p>

          <label className="text-white font-bold">Email</label>
          <input
            onBlur={handleBlur}
            type="email"
            name="user_email"
            className={`md:w-[400px] text-center mb-2 mt-3 p-3 rounded-md ${
              emailError ? "shadow-[0px_0px_10px] shadow-red-700" : ""
            }`}
          />
          <p className="font-bold text-red-600 mb-6">{emailError}</p>

          <label className="text-white font-bold">Mensagem</label>
          <textarea
            name="message"
            className="md:w-[400px] h-[200px] text-center mb-6 mt-3 p-3 rounded-lg"
          />

          <input
            type="submit"
            value="Enviar"
            className="bg-white rounded-full cursor-pointer text-mainPurple w-3/4 md:w-2/4 p-2 font-bold"
          />
        </form>
      </div>
    </div>
  );
}

export default Contact;
