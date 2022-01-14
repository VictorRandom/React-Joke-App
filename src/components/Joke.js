import React from 'react';

function Joke(props){
    return(
            <>
                <div>Joke {props.number}</div>
                <div>Setup: {props.setup}</div>
                <div>Punchline: {props.punchline}</div>
                <br></br>
            </>
        )
}

export default Joke;