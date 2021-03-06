import React, { useState } from 'react';
import './Home.css'

function Home (props){
    const [text, setText] = useState('');

    function search(e){
        e.preventDefault();

        props.history.push(`/search/${text}`)
    }

    return(
        <div>
            <form onSubmit={search}>
                <center>
                    <div className="img">
                        <img src="https://www.google.com/logos/doodles/2019/2019-womens-world-cup-day-3-5364976835887104-law.gif" alt="img-google" />
                    </div>
                    <input type="text" className="input-text" onChange={(e) => setText(e.target.value)}/>
                    <input type="submit" className="input-submit"/>
                </center>
            </form>

            <div className="credits">
                <div className="default">
                    Trabalho: Nome da matéria aqui <br />
                    Alunos: Leonardo Marco, Maria Clara, Mariane Luiza, Bernardo Jorge
                </div>
            </div>
        </div>

    )
}

export default Home;