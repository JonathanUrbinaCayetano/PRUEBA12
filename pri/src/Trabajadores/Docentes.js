import React, { useEffect, useState } from 'react';
import '../App.css';

const ListaDocentes = () => {
    const [docentes, setDocentes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://alex.starcode.com.mx/apiBD.php');
                const data = await response.json();
                setDocentes(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData(); // Fetch data initially

        // Set interval to fetch data every 5 seconds
        const intervalId = setInterval(fetchData, 5000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <h1 className="App App-link">Docentes Ingeniería Informática TESSFP</h1>
            <div>
                {docentes.map((docente) => (
                    <div key={docente.issemyn}>
                        <div>
                            clave ISSEMYN: <strong>{docente.issemyn}</strong>
                        </div>
                        <div>
                            <p>Nombre: <strong>{docente.nombre}</strong></p>
                        </div>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListaDocentes;