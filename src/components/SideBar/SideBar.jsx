import React, { useEffect } from 'react';
import s from './SideBar.module.css';
import sprite from '../../icons/all-icons.svg';
import cactus from '../../icons/cactus.png';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from '../../redux/auth/operations.js';
import { Navigate } from 'react-router';
import { selectIsLoggedIn } from '../../redux/auth/selectors.js';
import { selectIsModalOpen } from '../../redux/modal/selectors';
import AddBoardModal from '../Forms/Board/AddBoardModal/AddBoardModal.jsx';
import { openModal } from '../../redux/modal/slice.js';
import { selectBoards } from '../../redux/board/selectors';
import {
  deleteBoardThunk,
  getAllBoardsThunk,
} from '../../redux/board/operations.js';
import ConfirmationModal from '../Forms/Confirmation/ConfirmationModal.jsx';

const SideBar = ({ isOpen }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isModalOpen = useSelector(selectIsModalOpen);
  const boards = useSelector(selectBoards);

  useEffect(() => {
    if (isLoggedIn) dispatch(getAllBoardsThunk());
  }, [isLoggedIn, dispatch]);

  if (!isLoggedIn) {
    return <Navigate to="auth" />;
  }

  const handleDeleteBoard = (_id) => {
    dispatch(deleteBoardThunk(_id));
  };

  return (
    <section className={clsx(s.sideBarSection, { [s.open]: isOpen })}>
      <div className={s.sideBarContainer}>
        <div className={s.logoBox}>
          <span className={s.mailLogoSpan}>
            <svg className={s.mainLogo} width="12" height="16">
              <use href={`${sprite}#icon-taskpro-icon`} />
            </svg>
          </span>
          <h1 className={s.mainTitle}>Task Pro</h1>
        </div>

        <div className={s.createBoardBox}>
          <span className={s.myBoardsTitle}>My boards</span>
          <div
            className={s.addBoard}
            onClick={() => {
              dispatch(openModal());
            }}
          >
            <span className={s.createBordTitle}>Create a new board</span>
            <span className={s.addBoardPlusBtn}>
              <svg className={s.addBoardPlus} width="20" height="20">
                <use href={`${sprite}#icon-plus`} />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <ul className={s.boardsList}>
        {boards.length > 0 ? (
          boards.map((board) => (
            <li key={board._id} className={s.boardsItem}>
              <div className={s.sideBarBoard}>
                <div className={s.sideBarBoardInfo}>
                  {/* {board.icon} */}
                  {board.title}
                </div>
                <div className={s.sideBarBoardIcons}>
                  <svg className={s.sidebarBoardIcon} width="18" height="18">
                    <use href={`${sprite}#icon-pencil`} />
                  </svg>
                  <svg
                    className={s.sidebarBoardIcon}
                    onClick={() => {
                      handleDeleteBoard(board._id);
                    }}
                    width="18"
                    height="18"
                  >
                    <use href={`${sprite}#icon-trash`} />
                  </svg>
                </div>
                <span className={s.activeIndicator}></span>
              </div>
            </li>
          ))
        ) : (
          <span>Create your first board</span>
        )}
      </ul>
      <div className={s.sideBarContainer}>
        <div className={s.needHelpBox}>
          <img src={cactus} alt="A little cactus image" />
          <p className={s.needHelpDescription}>
            If you need help with <span>TaskPro</span>, check out our support
            resources or reach out to our customer support team.
          </p>
          <button className={s.needHelpBtn}>
            <svg width="20" height="20">
              <use href={`${sprite}#icon-help-circle`} />
            </svg>
            Need help?
          </button>
        </div>
        <button
          className={s.logoutBtn}
          onClick={() => {
            dispatch(logoutThunk());
          }}
        >
          <svg className={s.logoutIcon} width="32" height="32">
            <use href={`${sprite}#icon-login`} />
          </svg>
          Log out
        </button>
      </div>

      {isModalOpen && <AddBoardModal />}
    </section>
  );
};

export default SideBar;
