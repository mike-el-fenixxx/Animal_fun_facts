import { animals } from "./data/animals.js";
import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const App = () => {
    const [fact, setFact] = useState('');
    const [title, setTitle] = useState('');

    const displayFact = (animal) => {
        const animalFacts = animals[animal].facts;
        const randomIndex = Math.floor(Math.random() * animalFacts.length);
        const funFact = animalFacts[randomIndex];
        setFact(funFact);
        setTitle(animal);
    };

    const background = (
        <div className="background" style={{ backgroundColor: 'teal' }} />
    );

    const showBackground = true;

    const animalImages = Object.keys(animals).map((animal) => (
        <img
            key={animal}
            className="animal"
            alt={animal}
            src={animals[animal].image}
            aria-label={animal}
            role="button"
            onClick={() => displayFact(animal)}
        />
    ));

    return (
        <div>
            <h1>{title === "" ? "Click an animal for a fun fact" : `${title} fact`}</h1>
            {showBackground && background}
            <div className="animals">
                {animalImages}
            </div>
            <p id='fact'>{fact}</p>
        </div>
    );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);


export default App;