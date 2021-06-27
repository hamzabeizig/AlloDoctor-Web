import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Redirect } from 'react-router';
import {Menu} from "antd";
import Background from '../../Images/doc.png';
import '../App.css';
var w = window.innerWidth;
var h = window.innerHeight;
var sectionStyle = {
    width: w,
    height: h,
    backgroundImage: "url(" + Background + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position:'fixed',
    justifyContent:'center',
    fixed:true,
};
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = ({
    paper: {
        marginTop: 80,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },
    avatar: {
        marginTop: 20,
        marginBottom: 10,

    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: 30,
    },
    submit: {
        marginTop: 20,
    },
});

export default class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect:false,
            redirect2:false,

            email:null ,
            pass : null ,
            checksouvien:false,
        }
    }

    handleconnect = () => {
        if (( this.state.email==='' ) || ( this.state.pass==='' ))
        {alert('il faudra remplir tout les champs ')}
        if (( this.state.email!=='' ) || ( this.state.pass!=='' ))
        {this.setState({redirect2: true});}
    };
    handleOnquitter = () => {
        this.setState({redirect: true});
    }


    render() {
        if (this.state.redirect) {
            return <Redirect push to="/SignUp" />;
        }
        if (this.state.redirect2) {
            return <Redirect push to="/Dashboard" />;
        }
        return (
            <Container  style={ sectionStyle }>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div  style={useStyles.paper}>
                <Avatar  style={useStyles.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Connexion
                </Typography>
                <form style={useStyles.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={this.state.email}
                        onChange={(event) =>this.setState({
                            email:event.target.value
                        })}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Mot de passe"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={this.state.pass}
                        onChange={(event) =>this.setState({
                            pass:event.target.value
                        })}
                    />
                    <FormControlLabel
                        control={<Checkbox color="primary"
                        />}
                        onChange={() =>this.setState({
                            checksouvien: !this.state.checksouvien
                        })}
                        checked={this.state.checksouvien}
                        label="Se souvenir de moi"

                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={useStyles.submit}
                        onClick={this.handleconnect}
                    >
                        Se Connecter
                    </Button>
                    <Grid  style={useStyles.submit} container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Mot passe oublié?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link  onClick={this.handleOnquitter}>S'inscrire</Link>

                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box  mt={8}>
                <Copyright  />
            </Box>
        </Container>
            </Container>
    );
}}
