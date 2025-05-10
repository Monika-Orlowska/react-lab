import './App.css';
import { useState } from "react";
import "milligram";

function App() {
    const [email, setEmail] = useState('');
    const [loggedInAs, setLoggedInAs] = useState(null);


    function handleChange(event) {
        setEmail(event.target.value);
    }

    function handleAuthenticate() {
        setLoggedInAs(email);
        setEmail('');
    }

    let content;

    if (loggedInAs) {
        content = <div>
            <h2>Witaj {loggedInAs}</h2>
            <a onClick={() => setLoggedInAs(null)}>Wyloguj</a>
            </div>;
    } else {
        content = <div>
            <input type = "text" onChange={handleChange} value={email}/>
            <button onClick={handleAuthenticate} >Wchodzę</button>
        </div>;
    }


    return (
        <div>
            <h2>Witaj w systemie do zapisów na zajęcia</h2>
            <h4>Podaj swój adres e-mail:</h4>
            {content}
        </div>
    );
}

export default App;
