import './App.css';
import { useState } from "react";

function App() {
    const [email, setEmail] = useState('fracz@agh.edu.pl');
    const [username, setUsername] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loggedInAs, setLoggedInAs] = useState(null);


    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handleLogin() {
        setIsLoggedIn(true);

    }

        function handleLogout() {
            setIsLoggedIn(false);
            setUsername('');
        }


    return (
        <div>
            <h2>Witaj w systemie do zapisów na zajęcia</h2>
            {!isLoggedIn ? (
                <>
                    <input
                        type="text"
                        placeholder="Zaloguj się e-mailem"
                        value={username}
                        onChange={handleUsernameChange}
                    />

                    <button onClick={handleLogin}>Wchodzę</button>
                </>
            ) : (
                <div>
                <h3>Witaj {username}!</h3>
                <a href="#" onClick={handleLogout}>Wyloguj</a>
                </div>
            )}
        </div>
    );
}

export default App;
