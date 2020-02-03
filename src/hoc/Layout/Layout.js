import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import PropTypes from 'prop-types';

import Header from 'components/Header/Header';
import Sidebar from 'components/Sidebar/Sidebar';

import globalStyleVariables from 'styles/globalVariables.scss';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
    const [pageScrolled, setPageScrolled] = useState(false);
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);
    const [themeColor, setThemeColor] = useState(
        globalStyleVariables.backgroundColor,
    );
    const [burgerStyleClassNames, setBurgerStyleClassNames] = useState([
        'Burger',
    ]);

    const toggleSidebar = () => {
        const newState = !isOpenSidebar;
        setIsOpenSidebar(newState);
        if (typeof document !== 'undefined') {
            if (newState) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        }
    };

    const burgerStyleClassNamesHandler = () => {
        if (burgerStyleClassNames[1] === undefined) {
            setBurgerStyleClassNames([...burgerStyleClassNames, 'Change']);
        } else {
            setBurgerStyleClassNames(burgerStyleClassNames.slice(0, 1));
        }
    };

    const burgerClickedHandler = () => {
        burgerStyleClassNamesHandler();
        toggleSidebar();
    };

    useScrollPosition(({ currPos }) => {
        if (currPos.y < -1 && pageScrolled !== true) {
            setPageScrolled(true);
            setThemeColor(globalStyleVariables.midpointColor1);
            setTimeout(() => {
                setThemeColor(globalStyleVariables.midpointColor2);
            }, 100);
            setTimeout(() => {
                setThemeColor(
                    globalStyleVariables.scrolledHeaderBackgroundColor,
                );
            }, 200);
        } else if (currPos.y === 0) {
            setPageScrolled(false);
            setThemeColor(globalStyleVariables.midpointColor2);
            setTimeout(() => {
                setThemeColor(globalStyleVariables.midpointColor1);
            }, 100);
            setTimeout(() => {
                setThemeColor(globalStyleVariables.backgroundColor);
            }, 200);
        }
    });

    return (
        <div className={styles.Container}>
            <Helmet>
                <title>Szymon Pulut - Web Developer</title>
                <meta name="theme-color" content={themeColor} />
            </Helmet>
            <Sidebar
                isOpen={isOpenSidebar}
                pageScrolled={pageScrolled}
                closeHandler={burgerClickedHandler}
            />
            <Header
                burgerClickHandler={toggleSidebar}
                isOpenSidebar={isOpenSidebar}
                pageScrolled={pageScrolled}
                burgerClickedHandler={burgerClickedHandler}
                burgerStyleClassNames={burgerStyleClassNames}
            />
            <main className={styles.Main}>{children}</main>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
