import TestCard from "../TestCard/TestCard";
import './Tests.scss';

function Tests(props) {
    return (
        <div className="tests">
          <ul className="tests__list">
            <li className="tests__list-item">
              <TestCard />
            </li>
            <li className="tests__list-item">
              <TestCard />
            </li>
            <li className="tests__list-item">
              <TestCard />
            </li>
            <li className="tests__list-item">
              <TestCard />
            </li>
            <li className="tests__list-item">
              <TestCard />
            </li>
            <li className="tests__list-item">
              <TestCard />
            </li>
            <li className="tests__list-item">
              <TestCard />
            </li>
            <li className="tests__list-item">
              <TestCard />
            </li>
            <li className="tests__list-item">
              <TestCard />
            </li>
          </ul>
        </div>
    )
}

export default Tests;