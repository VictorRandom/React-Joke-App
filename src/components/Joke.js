import React from 'react';

function Joke(props){
    return(
            <>
                {props.number && <h2>Joke {props.number}</h2>}
                {props.setup && <h2>Setup: {props.setup}</h2>}
                {props.punchline && <p>Punchline: {props.punchline}</p>}
                <hr />
            </>
        )
}

export default Joke;