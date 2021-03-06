import './TestCard.scss';
import {useNavigate} from 'react-router-dom';
function TestCard (props) {
    const navigate = useNavigate();
    function handleClick() {
        navigate(`/test/:${id}`);
    }

    const {name, id, img} = props;

    return (
        <div className="card" onClick={handleClick}>
            <img src={img} alt="History" className="card__img" />
            <div className="card__text">
              <h2 className="card__title">{name}</h2>
            </div>
        </div>
    )
}

export default TestCard;