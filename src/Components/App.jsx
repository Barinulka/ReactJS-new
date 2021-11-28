import './App.scss';
import {Message} from "./Message";

function App() {
    return (
        <div className="app">
            <header className="app-header">
                <Message message={'Message component text'}/>
            </header>
        </div>
    );
}

export default App;
