import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchServicesRequest } from "../actions/actionCreators";
import spinner from "../img/spinner.png";

export default function ServiceList() {
  const { items, loading, error } = useSelector((state) => state.serviceList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServicesRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRetry = () => {
    dispatch(fetchServicesRequest());
  };

  if (loading) {
    return (
      <div className="ServiceList">
        <div className="ServiceList__spinner">
          <img src={spinner} alt="spinner" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="ServiceList">
        <div className="ServiceList__error">
          Произошла ошибка!
          <button onClick={handleRetry}>Повторить запрос</button>
        </div>
      </div>
    );
  }

  return (
    <div className="ServiceList">
      <ul className="ServiceList__list">
        {items.map((item) => (
          <Link
            to={`/services/${item.id}/details`}
            className="ServiceList__link"
            key={item.id}
          >
            <li className="ServiceList__item">
              <div className="ServiceList__container">
                {item.name}: {item.price.toLocaleString()} руб.
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}