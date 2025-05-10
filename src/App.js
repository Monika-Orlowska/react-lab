import './App.css';
import {useState} from "react"; //use state to bardzo fajny reaktywny feature, pozwala na reuzywanie czegos, co istnieje juz gdzies w innym miejscu systemu

function App() {

    const [email, setEmail] = useState('fracz@agh.edu.pl');
    function handleChange(event) {
        setEmail(event.target.value);
    }

    let message;
    if (email.length < 10) {
        message = <div>Ale masz krótki adres!</div>;
    } else if (email.length < 15) {
        message = <div>Twój adres e-mail jest w sam raz.</div>;
    } else {
        message = <div>Twój adres e-mail jest stanowczo za długi.</div>;
    }


    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            <h2>Twój e-mail to {email}</h2>
           <div>{message}</div>
            <input type="text" value={email} onChange={handleChange}/>
        </div>
    );
}

export default App;