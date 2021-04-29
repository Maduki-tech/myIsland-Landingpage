import React, {useEffect, useState} from 'react';
import {AppBar, Collapse, IconButton, makeStyles, Toolbar} from '@material-ui/core';
import {Link as Scroll} from 'react-scroll';

//ICONS
import SortIcon from '@material-ui/icons/Sort';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: '100vh',
        fontFamily: 'Nunito, sans-serif',

    },
    appbar: {
        background: 'none',
    },
    icons: {
        color: '#fff',
        fontSize: '2rem',
    },
    appbarTitle: {
        flexGrow: '1',
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto'
    },
    colorText: {
        color: '#5AFF3D'
    },
    title: {
        color: '#fff',
        fontSize: '3rem',
    },
    container: {
        textAlign: "center",
    },
    arrowDown: {
        color: '#5AFF3D',
        fontSize: '3rem',
    }
}));

export default function Header() {
    const classes = useStyles();
    const [check, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, [])
    return (
        <div className={classes.root} id={'header'}>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}>My<span className={classes.colorText}>Island</span></h1>
                    <SortIcon className={classes.icons}/>
                </Toolbar>
            </AppBar>
            <Collapse in={check} {...(check ? {timeout: 1000} : {})} collapsedHeight={50}>
                <div className={classes.container}>
                    <h1 className={classes.title}>Welcomes to <br/> My <span className={classes.colorText}>Island</span>
                    </h1>
                    <Scroll to={'place-to-visit'} smooth={true}>
                        <IconButton>
                            <KeyboardArrowDownIcon className={classes.arrowDown}/>
                        </IconButton>
                    </Scroll>
                </div>
            </Collapse>
        </div>
    )
}