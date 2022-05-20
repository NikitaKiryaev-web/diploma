import "./Home.scss";
import helloImg from "../../images/hello.gif";

function Home(props) {
    return (
        <div className="home">
        <h1 className="home__title">Добро пожаловать в iTest!</h1>
        <img src={helloImg} alt="Hello" className="home__img" />
        <h2 className="home__subtitle">Проходите тестирования с комфортом</h2>
        </div>
    )
}

export default Home;