import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EndPoint from '../../services/Api';
import Logo from '../../logo.png';

import './Search.css'

function Search(props) {
    const [text, setText] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        result(props.match.params.pesquisa)
    }, [])

    function search(e) {
        e.preventDefault();

        result(text)
    }

    async function result(text) {
        const search = {
            text: text
        }

        EndPoint.search(search)
            .then(res => {
                setResults(res.data);
                console.log(res.data)
            }).catch(error => {
                console.log(error);
            }) 

    }

    return (
        <div>
            <form className="container flex" onSubmit={search}>
                <div className="item">
                    <Link to="/"><img src={Logo} alt="img-google" width="100" /></Link>
                </div>
                <div className="item">
                    <input type="text" className="input-text" onChange={(e) => setText(e.target.value)} />
                    <input type="submit" className="input-submit" />
                </div>
            </form>

            <div className="results">
                {results.map((result, i) => (
                    <div className="box-results" key={i}>
                        <div>
                            <a href={result.link}>{result.titulo}</a>
                        </div>
                        <small>{result.link}</small>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Search;