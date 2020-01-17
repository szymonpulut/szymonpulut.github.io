import React from 'react';
import PropTypes from 'prop-types';

import styles from './Backdrop.module.scss';

const Backdrop = ({ show, closeModal }) => {
    return show ? (
        /* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
        <div className={styles.Backdrop} onClick={closeModal} />
    ) : null;
};

Backdrop.propTypes = {
    show: PropTypes.bool,
    closeModal: PropTypes.func.isRequired,
};

Backdrop.defaultProps = {
    show: false,
};

export default Backdrop;
