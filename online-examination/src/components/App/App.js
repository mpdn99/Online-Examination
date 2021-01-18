import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import useToken from './useToken'
import LogIn from '../Login/Login'
import logo from '../../images/menu-logo.png'
import Routes from '../../routes/Router'
import UnlockAccess from '../UnlockAccess'

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
            IS-Exam
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
}));


export default function App() {
    const classes = useStyles();

    const {token, setToken} = useToken();

    if(!token){
        return <LogIn setToken={setToken}/>
    }

    const removeUserSession = () => {
        sessionStorage.removeItem('token');
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                <Link variant="button" href="/" noWrap className={classes.toolbarTitle}>
                    <img src={logo} alt="Logo" height={50} href="/"/>
                </Link>
                <nav>
                    <UnlockAccess request={'admin'}>
                        <div>
                        <Link variant="button" color="textPrimary" href="/admin" className={classes.link}>
                            Dashboard
                        </Link>
                        <Link variant="button" color="textPrimary" href="/students" className={classes.link}>
                            Students
                        </Link>
                        <Link variant="button" color="textPrimary" href="/subjects" className={classes.link}>
                            Subjects
                        </Link>
                        <Link variant="button" color="textPrimary" href="/questions" className={classes.link}>
                            Questions
                        </Link>
                        <Link variant="button" color="textPrimary" href="/results" className={classes.link}>
                            Results
                        </Link>
                        </div>
                    </UnlockAccess>
                    <UnlockAccess request={'student'}>
                        <div>
                        <Link variant="button" color="textPrimary" href="/home" className={classes.link}>
                            Home
                        </Link>
                        <Link variant="button" color="textPrimary" href="/history" className={classes.link}>
                            Exam History
                        </Link>
                        </div>
                    </UnlockAccess>
                </nav>
                <Button color="primary" variant="outlined" href="/" className={classes.link} onClick={removeUserSession}>
                    Sign-out
                </Button>
                </Toolbar>
            </AppBar>
            <Container maxWidth="md" component="main">
               <Routes/>
            </Container>
            <Box mt={5}>
            <Copyright />
            </Box>
        </React.Fragment>
    );
}