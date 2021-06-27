import './App.css';
import { ReactComponent as BellIcon } from '../icons/bell.svg';
import { ReactComponent as MessengerIcon } from '../icons/messenger.svg';
import { ReactComponent as CaretIcon } from '../icons/caret.svg';
import { ReactComponent as CogIcon } from '../icons/cog.svg';
import { ReactComponent as ChevronIcon } from '../icons/logout.svg';
import { ReactComponent as ArrowIcon } from '../icons/arrow.svg';
import { ReactComponent as BoltIcon } from '../icons/bolt.svg';
import NotifListe from "./NotifListe";
import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import {Divider} from "@material-ui/core";
import List from "@material-ui/core/List";
import MsgsListe from "./MsgsListe";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Avatar from '@material-ui/core/Avatar';
import photo from '../Images/hamza.jpg'
export default class RightCompo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect :false,
        }
    }

    handleOnquitter = () => {
        this.setState({redirect: true});
    }
    render() {
        return (
            <Navbar>
                <NavItem icon={<BellIcon />}>
                    <NotifListe/>
                </NavItem>
                <NavItem icon={<MessengerIcon />} >
                    <MsgsListe/>
                </NavItem>

                <NavItem icon={<CaretIcon />}>
                    <DropdownMenu></DropdownMenu>
                </NavItem>
            </Navbar>
        );
    }
}


function Navbar(props) {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">{props.children}</ul>
        </nav>
    );
}

function NavItem(props) {
    const [open, setOpen] = useState(false);

    return (
        <ClickAwayListener onClickAway={() => setOpen(false)}>
        <li className="nav-item">
            <a href="#" className="icon-button"  onClick={() => setOpen(!open)}>
                {props.icon}
            </a>
            {open && props.children}
        </li>
        </ClickAwayListener>

    );
}

function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props) {
        return (
            <a href="#" className="menu-item" onClick={this.handleOnquitter}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </a>
        );
    }

    return (
        <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

            <CSSTransition
                in={activeMenu === 'main'}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem  leftIcon={ <Avatar src={photo} style={{width:25,height:25}}/>}  >Mon Profil</DropdownItem>
                    <Divider variant="middle" component="li" />
                    <DropdownItem
                        leftIcon={<CogIcon />}
                        rightIcon={<ChevronIcon />}
                        >
                        Paramètres
                    </DropdownItem>
                    <Divider variant="middle" component="li" />
                    <DropdownItem
                        leftIcon={<ChevronIcon />}
                        rightIcon={<ChevronIcon />}

                        >
                        Deconnexion
                    </DropdownItem>

                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'settings'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}>

            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'animals'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
                        <h2>Animals</h2>
                    </DropdownItem>
                    <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
                    <DropdownItem leftIcon="🐸">Frog</DropdownItem>
                    <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
                    <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
                </div>
            </CSSTransition>
        </div>
    );
}

