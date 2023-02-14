import React from "react";

export const Paciente = () => {
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">Hook</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">Gonzalo</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">example@gmail.com</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: {""}
        <span className="font-normal normal-case">12 de febrero 2023</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas: {""}
        <span className="font-normal normal-case">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quod
          animi, accusantium consequatur omnis illum beatae obcaecati cupiditate
          nisi sit exercitationem. Autem iste corrupti magnam placeat, eligendi
          nemo cupiditate totam.
        </span>
      </p>
    </div>
  );
};
