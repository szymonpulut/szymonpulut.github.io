import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-scroll';

import * as globalStyleVariables from 'styles/globalVariables.module.scss';
import * as styles from './NavigationItem.module.scss';

const NavigationItem = ({
    location,
    target,
    children,
    sidebarCloseHandler,
    shouldChangeOnActive,
}) => {
    const buttonStyleClasses = [styles.Button];
    const activeButtonStyleClasses = [styles.Active];
    let delay = 0;
    if (location === 'sidebar') {
        buttonStyleClasses.push(styles.Button_Sidebar);
        delay = 260;
    } else if (location === 'header-name') {
        buttonStyleClasses.pop();
        buttonStyleClasses.push(styles.Button_NoStyle);
        activeButtonStyleClasses.pop();
    }

    const headerHeight = parseInt(globalStyleVariables.headerHeightDesktop, 10);
    const offset = target === 'about-me' ? headerHeight : 0;

    const activeButtonStyleClassesString = shouldChangeOnActive
        ? activeButtonStyleClasses.join(' ')
        : '';

    return (
        <li className={styles.NavigationItem}>
            <Link
                className={buttonStyleClasses.join(' ')}
                onClick={sidebarCloseHandler}
                activeClass={activeButtonStyleClassesString}
                to={target}
                spy
                smooth="easeInOutCubic"
                offset={-offset}
                duration={600}
                delay={delay}
            >
                {children}
            </Link>
        </li>
    );
};

NavigationItem.propTypes = {
    location: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    sidebarCloseHandler: PropTypes.func,
    shouldChangeOnActive: PropTypes.bool,
};

NavigationItem.defaultProps = {
    sidebarCloseHandler: () => {},
    shouldChangeOnActive: false,
};

export default NavigationItem;
