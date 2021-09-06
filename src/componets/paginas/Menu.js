import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import Platillo from "../ui/Platillo";
import { FirebaseContext } from "../../firebase";

const Menu = () => {
  //definir el state para los platillos
  const [platillos, guardarPlatillos] = useState([]);

  const { firebase } = useContext(FirebaseContext);

  //consultar la bd al cargar
  useEffect(() => {
    const obtenerPlatillos = () => {
      try {
        firebase.db.collection("productos").onSnapshot(manejarSnapshot);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerPlatillos();
  }, []);

  // snapshot nos permite utilizar la bd de firestore en tiempo real
  function manejarSnapshot(snapshot) {
    const platillos = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    guardarPlatillos(platillos);
  }

  return (
    <>
      <h1 className="text-3xl font-light mb-4">Menu</h1>
      <Link
        to="/nuevo-platillo"
        className=" bg-blue-900 
                        hover:bg-blue-700
                        inline-block 
                        mb-5 p-2 
                        text-white 
                        uppercase 
                        font-bold"
      >
        Agregar platillo
      </Link>
      {platillos.map((platillo) => (
        <Platillo key={platillo.id} platillo={platillo} />
      ))}
    </>
  );
};

export default Menu;
