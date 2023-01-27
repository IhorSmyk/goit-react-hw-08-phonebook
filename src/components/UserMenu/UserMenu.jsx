import { useSelector, useDispatch } from 'react-redux';
import { logout } from 'redux/thunks/operations';
import s from './UserMenu.module.css';

export const UserMenu = () => {
  const email = useSelector(state => state.auth.email);
  const dispatch = useDispatch();

  return (
    <div className={s.userMenu}>
      <p className={s.userEmail}>{email}</p>
      <button
        type="button"
        onClick={() => dispatch(logout())}
        className={s.link}
      >
        Sign Out
      </button>
    </div>
  );
};
