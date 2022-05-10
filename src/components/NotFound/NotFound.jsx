import { NavLink } from "react-router-dom";
import './NotFound.scss';
import img from '../../images/404-img.jpg'; 

function NotFound(props) {
    return (
        <div className="not-found">
            <img src={img} alt="Not Found" className="not-found__img" />
            <p className="not-found__text">Поздравляем! Вы нашли несуществующую страницу <NavLink className="not-found__link" to="/">вернуться на главную</NavLink></p>
        </div>
    )
}

export default NotFound;