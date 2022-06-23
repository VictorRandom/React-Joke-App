import React, { useState } from 'react';

function Joke(props){
    
    const [isShown, setIsShown] = useState(false);

    function toggle(){
        setIsShown(prevIsShown => !prevIsShown);
    }

    return(
            <>
                {props.number && <h2>Joke {props.number}</h2>}
                {props.setup && <h2>Setup: {props.setup}</h2>}
                {isShown ? props.punchline && <p>Punchline: {props.punchline}</p> : ""}
                <button onClick={toggle}>Teste</button>
                <hr />
            </>
        )
}

export default Joke;