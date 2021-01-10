import React, { useState } from 'react';
import List from "./List";
import data from "./data";


function App()
{
    const[people, setPeople] = useState(data)
    const[count, setCount] = useState(1)


    const removePerson = () => {
        setCount(count + 1)
        let currentCount = count
        setPeople(people.filter(({ id }) => id !== currentCount))
    }

    return (
        <main>
            <section className="container">
                <h3>{people.length} birthdays today</h3>
                <List people={people}/>
                <button onClick={() => removePerson()}> Remove one person </button>
                <button onClick={() => setPeople([])}> Clear all </button>
            </section>
        </main>);
}

export default App;
