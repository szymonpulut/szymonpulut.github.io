import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Backdrop from './Backdrop/Backdrop';

import styles from './Modal.module.scss';

const Modal = ({ show, closeModal, inner, projectName, technologies }) => {
    const escapeKeyCloseModal = event => {
        if (event.keyCode === 27) {
            closeModal();
        }
    };
    if (typeof document !== 'undefined') {
        document.addEventListener('keydown', escapeKeyCloseModal);

        useEffect(() => {
            return () => {
                document.removeEventListener('keydown', escapeKeyCloseModal);
            };
        }, []);
    }
    return (
        <>
            <Backdrop show={show} closeModal={closeModal} />
            <div
                className={styles.Modal}
                id="modal"
                style={{
                    transform: show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: show ? '1' : '0',
                }}
                role="dialog"
                aria-modal="true"
            >
                <h3>{projectName}</h3>
                <h4>{technologies}</h4>
                {/* eslint-disable-next-line react/no-danger */}
                <div dangerouslySetInnerHTML={{ __html: inner }} />
            </div>
        </>
    );
};

Modal.propTypes = {
    show: PropTypes.bool,
    closeModal: PropTypes.func.isRequired,
    inner: PropTypes.string,
    projectName: PropTypes.string,
    technologies: PropTypes.string,
};

Modal.defaultProps = {
    show: false,
    inner: '',
    projectName: '',
    technologies: '',
};

export default Modal;
