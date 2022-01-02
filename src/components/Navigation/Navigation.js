import React from 'react';
import PropTypes from 'prop-types';

import NavigationItem from './NavigationItem/NavigationItem';

import * as styles from './Navigation.module.scss';

const Navigation = ({ location, sidebarCloseHandler }) => {
    const navigationClasses = [styles.Navigation];
    if (location === 'sidebar') {
        navigationClasses.push(styles.Navigation_Sidebar);
    }

    return (
        <div className={navigationClasses.join(' ')}>
            <ul>
                <NavigationItem
                    location={location}
                    sidebarCloseHandler={sidebarCloseHandler}
                    target="about-me"
                >
                    about me
                </NavigationItem>
                <NavigationItem
                    location={location}
                    sidebarCloseHandler={sidebarCloseHandler}
                    target="projects"
                    shouldChangeOnActive
                >
                    projects
                </NavigationItem>
                <NavigationItem
                    location={location}
                    sidebarCloseHandler={sidebarCloseHandler}
                    target="contact"
                    shouldChangeOnActive
                >
                    contact & resume
                </NavigationItem>
            </ul>
        </div>
    );
};

Navigation.propTypes = {
    location: PropTypes.string.isRequired,
    sidebarCloseHandler: PropTypes.func,
};

Navigation.defaultProps = {
    sidebarCloseHandler: () => {},
};

export default Navigation;
