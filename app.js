// app.js

// Crear un componente simple de React
function App() {
    return (
        <div>
            <h1>¡Hola, mundo!</h1>
            <p>Este es un componente de React.</p>
        </div>
    );
}

// Renderizar el componente en el div con id "root"
ReactDOM.render(<App />, document.getElementById('root'));