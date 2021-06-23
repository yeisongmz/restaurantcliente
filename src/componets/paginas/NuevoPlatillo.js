import React from 'react';

const NuevoPlatillo = () => {
    return ( 
        <>
            <h1 className="text-3xl font-light mb-4">Agregar Platillo</h1>

            <div className="flex justify-center mt-10">
                <div className="w-full max-w-3xl">
                    <form>
                        <div className="mb-4">
                            <label>Nombre</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                            />
                        </div>
                        <div className="mb-4">
                            <label>label</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                            />
                        </div>
                        <div className="mb-4">
                            <label>label</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                            />
                        </div>
                        <div className="mb-4">
                            <label>label</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
     );
}
 
export default NuevoPlatillo;