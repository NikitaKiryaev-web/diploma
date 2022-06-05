import TestCard from "../TestCard/TestCard";
import { useEffect, useContext, useState } from "react";
import './Tests.scss';
import api from "../../utils/api.js";
import { UserContext } from '../../contexts/UserContext.js';

function Tests(props) {

  const {userLogin} = useContext(UserContext);
  const [tests, setTests] = useState([]);

  useEffect(() => {
    api.getTests(userLogin)
      .then(res => {
        setTests([...res]);
      })
      .catch(e => {
        console.log(e);
      })
  }, []);

    return (
        <div className="tests">
          <ul className="tests__list">
            {tests.length ? 
            tests.map(test => {
              return (
              <li className="tests__list-item" key={test.GUID}>
              <TestCard name={test.TestName} id={test.GUID} img={test.TestPic}  />
            </li>
              )
            })
            :
            <p className="tests__error">Для вас нет доступных тестов, зайдите позже!</p>  
            }
          </ul>
        </div>
    )
}

export default Tests;