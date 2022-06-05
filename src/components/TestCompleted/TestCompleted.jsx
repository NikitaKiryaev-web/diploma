import { useEffect, useState } from 'react';
import checkSuccess from '../../images/checkSuccess.png';
import checkFail from '../../images/checkFail.png';
import api from '../../utils/api.js';
import './TestCompleted.scss';

function TestCompleted(props) {

    const [points, setPoints] = useState(null);
    const [maxScore, setMaxScore] = useState(null);

    const {testID, answers} = props;

    useEffect(() => {
        api.getResults(testID, answers)
            .then(res => {
                console.log(res[0]);
                setPoints(Math.floor(res[0].points));
                setMaxScore(res[0].MaximumScore)
            })
    }, [])

    return (
        
        <div className="completed">
            { (points >= maxScore) ?
             <>   
            <img src={checkSuccess} alt="Success" className="completed__img" />
            <h2 className="completed__text">Поздравляем, тест успешно пройден!</h2>
            <p className="completed__counter">Колличеств баллов {points}/100</p>
            </>
            :
            <>   
            <img src={checkFail} alt="Fail" className="completed__img" />
            <h2 className="completed__text">К сожалению, вы не прошли тест</h2>
            <p className="completed__counter">Колличеств баллов {points}/100</p>
            <p className="completed__min-points">Проходной балл {maxScore}</p>
            </>
}
        </div>
    )
}

export default TestCompleted;