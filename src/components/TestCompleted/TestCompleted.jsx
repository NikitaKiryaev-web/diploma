import checkSuccess from '../../images/checkSuccess.png';
import './TestCompleted.scss';

function TestCompleted(props) {

    return (
        <div className="completed">
            <img src={checkSuccess} alt="Success" className="completed__img" />
            <h2 className="completed__text">Поздравляем, тест успешно пройден!</h2>
            <p className="completed__counter">Правильных ответов 4/4</p>
        </div>
    )
}

export default TestCompleted;