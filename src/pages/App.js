import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';

const App = () => {
    const [value3, setValue3] = useState('');

    return (
        <>
            <div className="p-grid">
                <div className="p-col-12">
                    <h1>Buscador</h1>
                    <span className="p-input-icon-right p-float-label">
                        <i className="pi pi-search" />
                        <InputText className="p-inputtext-lg p-d-block p-col-12 p-md-6 p-lg-12" id="buscar" value={value3}
                            onChange={(e) => setValue3(e.target.value)}
                            placeholder = "Ingresa el nombre de la canción, artista o álbum a reproducir" />
                    </span>
                </div>
            </div>
        </>
    )
}

export default App;