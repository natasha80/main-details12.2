import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getServiceRequest } from "../actions/actionCreators";
import spinner from "../img/spinner.png";

export default function ServiceView({ match }) {
  const { item, loading, error } = useSelector((state) => state.serviceView);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServiceRequest(match.params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRetry = () => {
    dispatch(getServiceRequest(match.params.id));
  };

  if (loading) {
    return (
      <div className="ServiceView">
        <div className="ServiceView__spinner">
          <img src={spinner} alt="spinner" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="ServiceView">
        <div className="ServiceView__error">
          Произошла ошибка!
          <button onClick={handleRetry}>Повторить запрос</button>
        </div>
      </div>
    );
  }

  return (
    <div className="ServiceView">
      {item && (
        <div>
          <div className="ServiceView__label">Название</div>
          <div>{item.name}</div>
          <div className="ServiceView__label">Цена </div>
          <div>{item.price.toLocaleString()} руб.</div>
          <div className="ServiceView__label">Описание</div>
          <div>{item.content}</div>
          <Link to="/services" className="ServiceView__link">
            Назад
          </Link>
        </div>
      )}
    </div>
  );
}