import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-title.png';
const Home =()=> {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br />I'm
                <img src={LogoTitle} alt="developer" />
                Lobonan
                <br/>
                web developer
                </h1>
                <h2>Full Stack Developer / Front End Developer / Back End Developer</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    );
};

export default Home;