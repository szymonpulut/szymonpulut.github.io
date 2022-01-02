import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './Burger.module.scss';

const Burger = ({ clicked, styleClassNames }) => {
    const styleClasses = styleClassNames.map(element => {
        return styles[element];
    });
    return (
        <button
            className={styleClasses.join(' ')}
            onClick={clicked}
            aria-label="Open the menu"
            type="button"
        >
            <div className={styles.Bar1} />
            <div className={styles.Bar2} />
            <div className={styles.Bar3} />
        </button>
    );
};

Burger.propTypes = {
    clicked: PropTypes.func.isRequired,
    styleClassNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Burger;
