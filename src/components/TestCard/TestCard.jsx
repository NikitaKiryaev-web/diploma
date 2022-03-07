import './TestCard.scss';
import img from '../../images/history.png';
function TestCard (props) {

    return (
        <div className="card">
            <img src={img} alt="History" className="card__img" />
            <div className="card__text">
              <h2 className="card__title">History</h2>
            </div>
        </div>
    )
}

export default TestCard;