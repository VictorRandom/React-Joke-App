import React from 'react';
import './App.css';
import Joke from './components/Joke';
import jokesData from './components/jokesData';

function App() {
  console.log(jokesData)
  const jokeElements = jokesData.map((joke) => {
    return <Joke number={joke.number} setup={joke.setup} punchline={joke.punchline} />
  })

  

  return (
    <div>
      { jokeElements }
    </div>

  );
}

export default App;



//  <div className="App">
// <Joke 
// number="1"
// setup="I got my daughter a fridge for her birthday"
// punchline="I can't wait to see her face light up when she opens it." />
// <Joke
// number="2"     
// setup="How did the hacker escape the police?"
// punchline="He just ransomware!" />
// <Joke
// number="3"  
// setup="Why don't pirates travel on mountain roads?"
// punchline="Scurvy." />
// <Joke    
// number="4"    
// setup="Why do bees stay in the hive in the winter?"
// punchline="Swarm." />
// <Joke      
// number="5" 
// setup="What's the best thing about Switzerland?"
// punchline="I don't know, but the flag is a big plus!" /> 
// </div>



/* Challenge:
One LAST time in this course, set up a React app from scratch
- Render an <App /> component
    - App should be in its own file
- App should render 4-5 <Joke /> components 
  (Joke component defined in its own file too)
    - Each Joke should receive a "setup" prop and a "punchline" prop
      and render those however you'd like
- Use your favorite 2-part jokes (setup & punchline), or check
  jokes.md file for some examples.



EXTRA CREDIT:
Some jokes are only a punchline with no setup:

E.g.: "It’s hard to explain puns to kleptomaniacs because 
they always take things literally."

If you don't pass in a "question" prop, how might you make it only 
show the punchline?
*/