import React from 'react';
import "../css/Home.css";
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='home'>
            <div className="d-flex h-100 text-center text-bg-dark">
                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                    <main className="px-3 main">
                        <h1>Cover your page.</h1>
                        <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
                        <p className="lead">
                            <Link to="/gadgets" className="btn btn-lg btn-secondary fw-bold border-white bg-white">Learn more</Link>
                        </p>
                    </main>

                    <footer className="mt-auto text-white-50">
                        <p>Cover template for <Link to="https://getbootstrap.com/" className="text-white">Bootstrap</Link>, by <Link to="https://twitter.com/mdo" className="text-white">@mdo</Link>.</p>
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default Home;
