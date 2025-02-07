import './App.css'

export function App() {
    return (
        <article className='md-twitter'>
            <header className='md-twitter-header'> 
                <img
                className='md-twitter-avatar'
                alt="midu" src="https://unavatar.io/midudev" />
                <div className='md-twitter-info'>
                    <strong>Miguel Duran</strong>
                    <span className='md-twitter-infouser'>Frontend Developer</span  >
                </div>
                </header>
            <aside>
                <button className='md-twitter-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}