import React from 'react';
import { Routes, Route } from 'react-router';

import firebase, {FirebaseContext} from './firebase';

import Ordenes from './componets/paginas/Ordenes';
import Menu from './componets/paginas/Menu';
import NuevoPlatillo from './componets/paginas/NuevoPlatillo';
import Sidebar from "./componets/ui/Sidebar";

function App() {
  return (
    <FirebaseContext.Provider
      value={{
        firebase
      }}
    >
      <div className="md:flex min-h-screen" >
      <Sidebar/>

      <div className="md:w3/5 xl:w-2/5 p-6 " >
          <Routes>
              <Route path="/" element={ <Ordenes/> } />
              <Route path="/ordenes" element={ <Ordenes/> } />
              <Route path="/menu" element={ <Menu/> } />
              <Route path="/nuevo-platillo" element={ <NuevoPlatillo/> } />
          </Routes>
      </div>
      
    </div>
    </FirebaseContext.Provider>
  );
}

export default App;
