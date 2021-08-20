import React, { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors } from '../../../redux/contacts';
import styles from './MyModal.module.scss';
import { setModal } from '../../../redux/contacts';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const Portal = ({ children }) => {
  const modalRoot = document.querySelector('#modal-root');
  const el = document.createElement('div');

  useEffect(() => {
    modalRoot.appendChild(el);
  }, [el, modalRoot]);
  useEffect(() => {
    return () => modalRoot.removeChild(el);
  });
  return createPortal(children, el);
};

export default function MyModal({ children }) {
  const dispatch = useDispatch();

  const visible = useSelector(contactsSelectors.getModal);
  const rootClasses = [styles.myModal];

  const escFunction = useCallback(
    event => {
      if (event.keyCode === 27) {
        dispatch(setModal(false));
      }
    },
    [dispatch],
  );

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', escFunction, false);
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', escFunction, false);
    };
  }, [escFunction, visible]);

  const onCloseModal = useCallback(() => {
    dispatch(setModal(false));
  }, [dispatch]);

  if (visible) {
    rootClasses.push(styles.active);
  }
  return (
    <Portal>
      <div className={rootClasses.join(' ')} onClick={onCloseModal}>
        <div
          className={styles.myModalContent}
          onClick={e => e.stopPropagation()}
        >
          <IconButton
            className={styles.closeBtn}
            aria-label="close"
            onClick={onCloseModal}
          >
            <CloseIcon />
          </IconButton>
          {children}
        </div>
      </div>
    </Portal>
  );
}
