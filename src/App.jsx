import { useEffect, useState } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListadoNoticias from './components/ListadoNoticias';

function App () {

    // definir la categoria y noticias
    const [ categoria, guardarCategoria ] = useState( '' );
    const [ noticias, guardarNoticias ] = useState( [] );

    useEffect( () => {
        const consultarAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=co&category=${ categoria }&apiKey=9c473e5e31b8469aafbbbf5ebfe6ad59`;

            const respuesta = await fetch( url );
            const noticias = await respuesta.json();

            guardarNoticias( noticias.articles );
        };
        consultarAPI();
    }, [ categoria ] );


    return (
        <>
            <Header
                titulo="Bucador de Noticias"
            />

            <div className="container white">
                <Formulario
                    guardarCategoria={ guardarCategoria }
                />

                <ListadoNoticias
                    noticias={ noticias }
                />
            </div>
        </>
    );
}

export default App;
