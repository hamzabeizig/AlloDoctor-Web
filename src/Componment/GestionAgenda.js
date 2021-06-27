import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './App.css';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from "reactstrap/lib/FormGroup";
import {Checkbox} from "@material-ui/core";
import {Col, Layout, Menu, Row} from "antd";
import Switch from "@material-ui/core/Switch";
import TimeInput from 'material-ui-time-picker'
import moment, {max, min} from "moment";
import 'react-dates/initialize';
import { DateRangePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import TextField from '@material-ui/core/TextField';
import { Redirect } from 'react-router';
var  k = 0 ;
var i = 0;
var w = window.innerWidth;
var h = window.innerHeight;
  var  mondays = [];
  var tuesdays = [] ;
  var wednesdays = [] ;
  var  thursdays = [] ;
  var fridays = [] ;
  var satrudays = [] ;
  var sundays = [] ;
var mini1 = null;
var mini2 = 0;

var maxi1 = null;
var maxi2 = 0;

export const theminmax = [
];
export const daysoutwork = [
];

export const startend = [
];

export const duree = [] ;

export const mydata = [

];

export const data = [

];
export const jours = [

];
var s2=null;
    var s1=null;
const now = moment('2020-07-01');
export default class GestionAgenda extends React.Component {

    state = {
        activeStep: 0,

        CheckedLundi:false,
        CheckedMardi:false,
        CheckedMercredi:false,
        CheckedJeudi:false,
        CheckedVendredi:false,
        CheckedSamedi:false,
        CheckedDimanche:false,

        switchlundi:false,
        lundidebut:null,
        lundipause:null,
        lundiretour:null,
        lundifin : null,

        switchmardi:false,
        mardidebut:null,
        mardipause:null,
        mardiretour:null,
        mardifin : null,


        switchmercredi:false,
        mercredidebut:null,
        mercredipause:null,
        mercrediretour:null,
        mercredifin : null,


        switchjeudi:false,
        jeudidebut:null,
        jeudipause:null,
        jeudiretour:null,
        jeudifin : null,


        switchvendredi:false,
        vendredidebut:null,
        vendredipause:null,
        vendrediretour:null,
        vendredifin : null,


        switchsamedi:false,
        samedidebut:null,
        samedipause:null,
        samediretour:null,
        samedifin : null,


        switchdimanche:false,
        dimanchedebut:null,
        dimanchepause:null,
        dimancheretour:null,
        dimanchefin : null,

        visitetime:null,

        startDate:null,
        endDate:null,

        focusedInput:null,
        redirect:false,

         compteurk : 0 ,
         compteuri : 0 ,
    };



        getNumberOfSteps() {
        return 4;
    }


    getStepContent(step) {
        switch (step) {
            case 0:
                return (
                    <div >
                        <h1 style={{alignSelf:'center',textAlign:'center',fontSize:35,fontWeight:'Bold',marginTop:h/20,marginBottom:h/10}}>Choisir les jours lequels vous travaillez</h1>
                        <FormGroup style={{marginLeft:w/12,marginBottom:h/10,alignSelf:'center'}} row={true}>
                            <FormControlLabel style={{marginLeft:w/100}}
                                control={<Checkbox color={'primary'} name="CheckedLundi" />}
                                label="Lundi"
                                checked={this.state.CheckedLundi}
                                onChange={() =>this.setState({
                                    CheckedLundi: !this.state.CheckedLundi
                                })}
                            />
                            <FormControlLabel style={{marginLeft:w/100}}
                                control={<Checkbox color={'primary'} name="CheckedMardi" />}
                                label="Mardi"
                                checked={this.state.CheckedMardi}
                                onChange={() =>this.setState({
                                    CheckedMardi: !this.state.CheckedMardi
                                })}
                            />
                            <FormControlLabel style={{marginLeft:w/100}}
                                control={<Checkbox color={'primary'} name="CheckedMercredi" />}
                                label="Mercredi"
                                checked={this.state.CheckedMercredi}
                                onChange={() =>this.setState({
                                    CheckedMercredi: !this.state.CheckedMercredi
                                })}
                            />
                            <FormControlLabel style={{marginLeft:w/100}}
                                control={<Checkbox color={'primary'} name="CheckedJeudi" />}
                                label="Jeudi"
                                checked={this.state.CheckedJeudi}
                                onChange={() =>this.setState({
                                    CheckedJeudi: !this.state.CheckedJeudi
                                })}
                            />
                            <FormControlLabel style={{marginLeft:w/100}}
                                control={<Checkbox color={'primary'} name="CheckedVendredi" />}
                                label="Vendredi"
                                checked={this.state.CheckedVendredi}
                                onChange={() =>this.setState({
                                    CheckedVendredi: !this.state.CheckedVendredi
                                })}
                            />
                            <FormControlLabel style={{marginLeft:w/100}}
                                control={<Checkbox color={'primary'} name="CheckedSamedi" />}
                                label="Samedi"
                                checked={this.state.CheckedSamedi}
                                onChange={() =>this.setState({
                                    CheckedSamedi: !this.state.CheckedSamedi
                                })}
                            />
                            <FormControlLabel style={{marginLeft:w/100}}
                                control={<Checkbox color={'primary'} name="CheckedDimanche" />}
                                label="Dimanche"
                                checked={this.state.CheckedDimanche}
                                onChange={() =>this.setState({
                                    CheckedDimanche: !this.state.CheckedDimanche
                                })}
                            />
                        </FormGroup>
                    </div>
                );
            case 1:
                return (
                    <div>
                        <h1 style={{alignSelf:'center',textAlign:'center',fontSize:30,fontWeight:'Bold',marginBottom:h/80}}>Réglez vos horaires du travail</h1>
                        <Row className={'formulairepage2'} style={{ marginTop:h/20,marginBottom:h/20}}>
                            { this.state.CheckedLundi===true?
                        <Col  style={{marginLeft:5,width:w/9,height:h/2.5,alignSelf:'center',backgroundColor:"white"}}>
                            <h4 style={{textAlign:'center',fontSize:20,marginTop:h/50}}>Lundi</h4>
                            <div style={{marginLeft:w/25}} >
                            <Switch size={"small"}
                                color="default"
                                name="checkedA"
                                    checked={this.state.switchlundi}
                                    onChange={() =>this.setState({
                                        switchlundi: !this.state.switchlundi
                                    })}
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                            </div>
                            { this.state.switchlundi===false?
                                <div>
                            <h3 style={{textAlign:'center',fontSize:14,color:'#367787'}}>Séance unique</h3>
                                <text style={{marginLeft:w/35}}>Heure Debut</text>
                            <div style={{marginLeft:w/25,width:40,height:40}}>
                            <TimeInput
                                mode='24h'
                                value={this.state.lundidebut}
                                onChange={(date) =>this.setState({
                                    lundidebut: date
                                })}
                            />
                            </div>
                            <text style={{marginLeft:w/30}}>Heure Fin</text>
                            <div style={{marginLeft:w/25,width:40,height:40}}>
                                <TimeInput
                                    mode='24h'
                                    value={this.state.lundifin}
                                    onChange={(date) =>this.setState({
                                        lundifin: date
                                    })}
                                />
                            </div>
                                </div>   : <div>
                                    <h3 style={{textAlign:'center',fontSize:14,color:'#367787'}}>Double séance</h3>
                                    <text style={{marginLeft:w/100}}>Heure Debut/Pause</text>
                                   <Row>
                                    <div style={{marginLeft:w/60,width:40,height:40}}>
                                        <TimeInput
                                            mode='24h'
                                            value={this.state.lundidebut}
                                            onChange={(date) =>this.setState({
                                                lundidebut: date
                                            })}
                                        />
                                    </div>
                                    <div style={{marginLeft:w/60,width:40,height:40}}>
                                        <TimeInput
                                            mode='24h'
                                            value={this.state.lundipause}
                                            onChange={(date) =>this.setState({
                                                lundipause: date
                                            })}
                                        />
                                    </div>
                                   </Row>
                                    <text style={{marginLeft:w/80}}>Heure Retour/Fin</text>
                                    <Row>
                                        <div style={{marginLeft:w/60,width:40,height:40}}>
                                            <TimeInput
                                                mode='24h'
                                                value={this.state.lundiretour}
                                                onChange={(date) =>this.setState({
                                                    lundiretour: date
                                                })}
                                            />
                                        </div>
                                        <div style={{marginLeft:w/60,width:40,height:40}}>
                                            <TimeInput
                                                mode='24h'
                                                value={this.state.lundifin}
                                                onChange={(date) =>this.setState({
                                                    lundifin: date
                                                })}
                                            />
                                        </div>
                                    </Row>

                                </div> }
                        </Col> :null}


                            { this.state.CheckedMardi===true?

                            <Col  style={{marginLeft:5,width:w/9,height:h/2.5,alignSelf:'center',backgroundColor:"white"}}>
                                <h4 style={{textAlign:'center',fontSize:20,marginTop:h/50}}>Mardi</h4>
                                <div style={{marginLeft:w/25}} >
                                    <Switch size={"small"}
                                            color="default"
                                            name="checkedA"
                                            checked={this.state.switchmardi}
                                            onChange={() =>this.setState({
                                                switchmardi: !this.state.switchmardi
                                            })}
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    />
                                </div>
                                { this.state.switchmardi===false?
                                    <div>
                                        <h3 style={{textAlign:'center',fontSize:14,color:'#367787'}}>Séance unique</h3>
                                        <text style={{marginLeft:w/35}}>Heure Debut</text>
                                        <div style={{marginLeft:w/25,width:40,height:40}}>
                                            <TimeInput
                                                mode='24h'
                                                value={this.state.mardidebut}
                                                onChange={(date) =>this.setState({
                                                    mardidebut: date
                                                })}
                                            />
                                        </div>
                                        <text style={{marginLeft:w/30}}>Heure Fin</text>
                                        <div style={{marginLeft:w/25,width:40,height:40}}>
                                            <TimeInput
                                                mode='24h'
                                                value={this.state.mardifin}
                                                onChange={(date) =>this.setState({
                                                    mardifin: date
                                                })}
                                            />
                                        </div>
                                    </div>   : <div>
                                        <h3 style={{textAlign:'center',fontSize:14,color:'#367787'}}>Double séance</h3>
                                        <text style={{marginLeft:w/100}}>Heure Debut/Pause</text>
                                        <Row>
                                            <div style={{marginLeft:w/60,width:40,height:40}}>
                                                <TimeInput
                                                    mode='24h'
                                                    value={this.state.mardidebut}
                                                    onChange={(date) =>this.setState({
                                                        mardidebut: date
                                                    })}
                                                />
                                            </div>
                                            <div style={{marginLeft:w/60,width:40,height:40}}>
                                                <TimeInput
                                                    mode='24h'
                                                    value={this.state.mardipause}
                                                    onChange={(date) =>this.setState({
                                                        mardipause: date
                                                    })}
                                                />
                                            </div>
                                        </Row>
                                        <text style={{marginLeft:w/80}}>Heure Retour/Fin</text>
                                        <Row>
                                            <div style={{marginLeft:w/60,width:40,height:40}}>
                                                <TimeInput
                                                    mode='24h'
                                                    value={this.state.mardiretour}
                                                    onChange={(date) =>this.setState({
                                                        mardiretour: date
                                                    })}
                                                />
                                            </div>
                                            <div style={{marginLeft:w/60,width:40,height:40}}>
                                                <TimeInput
                                                    mode='24h'
                                                    value={this.state.mardifin}
                                                    onChange={(date) =>this.setState({
                                                        mardifin: date
                                                    })}
                                                />
                                            </div>
                                        </Row>

                                    </div> }
                            </Col>:null}



                            { this.state.CheckedMercredi===true?
                            <Col  style={{marginLeft:5,width:w/9,height:h/2.5,alignSelf:'center',backgroundColor:"white"}}>
                                <h4 style={{textAlign:'center',fontSize:20,marginTop:h/50}}>Mercredi</h4>
                                <div style={{marginLeft:w/25}} >
                                    <Switch size={"small"}
                                            color="default"
                                            name="checkedA"
                                            checked={this.state.switchmercredi}
                                            onChange={() =>this.setState({
                                                switchmercredi: !this.state.switchmercredi
                                            })}
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    />
                                </div>
                                { this.state.switchmercredi===false?
                                    <div>
                                        <h3 style={{textAlign:'center',fontSize:14,color:'#367787'}}>Séance unique</h3>
                                        <text style={{marginLeft:w/35}}>Heure Debut</text>
                                        <div style={{marginLeft:w/25,width:40,height:40}}>
                                            <TimeInput
                                                mode='24h'
                                                value={this.state.mercredidebut}
                                                onChange={(date) =>this.setState({
                                                    mercredidebut: date
                                                })}
                                            />
                                        </div>
                                        <text style={{marginLeft:w/30}}>Heure Fin</text>
                                        <div style={{marginLeft:w/25,width:40,height:40}}>
                                            <TimeInput
                                                mode='24h'
                                                value={this.state.mercredifin}
                                                onChange={(date) =>this.setState({
                                                    mercredifin: date
                                                })}
                                            />
                                        </div>
                                    </div>   : <div>
                                        <h3 style={{textAlign:'center',fontSize:14,color:'#367787'}}>Double séance</h3>
                                        <text style={{marginLeft:w/100}}>Heure Debut/Pause</text>
                                        <Row>
                                            <div style={{marginLeft:w/60,width:40,height:40}}>
                                                <TimeInput
                                                    mode='24h'
                                                    value={this.state.mercredidebut}
                                                    onChange={(date) =>this.setState({
                                                        mercredidebut: date
                                                    })}
                                                />
                                            </div>
                                            <div style={{marginLeft:w/60,width:40,height:40}}>
                                                <TimeInput
                                                    mode='24h'
                                                    value={this.state.mercredipause}
                                                    onChange={(date) =>this.setState({
                                                        mercredipause: date
                                                    })}
                                                />
                                            </div>
                                        </Row>
                                        <text style={{marginLeft:w/80}}>Heure Retour/Fin</text>
                                        <Row>
                                            <div style={{marginLeft:w/60,width:40,height:40}}>
                                                <TimeInput
                                                    mode='24h'
                                                    value={this.state.mercrediretour}
                                                    onChange={(date) =>this.setState({
                                                        mercrediretour: date
                                                    })}
                                                />
                                            </div>
                                            <div style={{marginLeft:w/60,width:40,height:40}}>
                                                <TimeInput
                                                    mode='24h'
                                                    value={this.state.mercredifin}
                                                    onChange={(date) =>this.setState({
                                                        mercredifin: date
                                                    })}
                                                />
                                            </div>
                                        </Row>

                                    </div> }
                            </Col>
                                :null}


                            { this.state.CheckedJeudi===true?

                            <Col  style={{marginLeft:5,width:w/9,height:h/2.5,alignSelf:'center',backgroundColor:"white"}}>
                                <h4 style={{textAlign:'center',fontSize:20,marginTop:h/50}}>Jeudi</h4>
                                <div style={{marginLeft:w/25}} >
                                    <Switch size={"small"}
                                            color="default"
                                            name="checkedA"
                                            checked={this.state.switchjeudi}
                                            onChange={() =>this.setState({
                                                switchjeudi: !this.state.switchjeudi
                                            })}
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    />
                                </div>
                                { this.state.switchjeudi===false?
                                    <div>
                                        <h3 style={{textAlign:'center',fontSize:14,color:'#367787'}}>Séance unique</h3>
                                        <text style={{marginLeft:w/35}}>Heure Debut</text>
                                        <div style={{marginLeft:w/25,width:40,height:40}}>
                                            <TimeInput
                                                mode='24h'
                                                value={this.state.jeudidebut}
                                                onChange={(date) =>this.setState({
                                                    jeudidebut: date
                                                })}
                                            />
                                        </div>
                                        <text style={{marginLeft:w/30}}>Heure Fin</text>
                                        <div style={{marginLeft:w/25,width:40,height:40}}>
                                            <TimeInput
                                                mode='24h'
                                                value={this.state.jeudifin}
                                                onChange={(date) =>this.setState({
                                                    jeudifin: date
                                                })}
                                            />
                                        </div>
                                    </div>   : <div>
                                        <h3 style={{textAlign:'center',fontSize:14,color:'#367787'}}>Double séance</h3>
                                        <text style={{marginLeft:w/100}}>Heure Debut/Pause</text>
                                        <Row>
                                            <div style={{marginLeft:w/60,width:40,height:40}}>
                                                <TimeInput
                                                    mode='24h'
                                                    value={this.state.jeudidebut}
                                                    onChange={(date) =>this.setState({
                                                        jeudidebut: date
                                                    })}
                                                />
                                            </div>
                                            <div style={{marginLeft:w/60,width:40,height:40}}>
                                                <TimeInput
                                                    mode='24h'
                                                    value={this.state.jeudipause}
                                                    onChange={(date) =>this.setState({
                                                        jeudipause: date
                                                    })}
                                                />
                                            </div>
                                        </Row>
                                        <text style={{marginLeft:w/80}}>Heure Retour/Fin</text>
                                        <Row>
                                            <div style={{marginLeft:w/60,width:40,height:40}}>
                                                <TimeInput
                                                    mode='24h'
                                                    value={this.state.jeudiretour}
                                                    onChange={(date) =>this.setState({
                                                        jeudiretour: date
                                                    })}
                                                />
                                            </div>
                                            <div style={{marginLeft:w/60,width:40,height:40}}>
                                                <TimeInput
                                                    mode='24h'
                                                    value={this.state.jeudifin}
                                                    onChange={(date) =>this.setState({
                                                        jeudifin: date
                                                    })}
                                                />
                                            </div>
                                        </Row>

                                    </div> }
                            </Col> : null }



                            { this.state.CheckedVendredi===true?

                            <Col  style={{marginLeft:5,width:w/9,height:h/2.5,alignSelf:'center',backgroundColor:"white"}}>
                                <h4 style={{textAlign:'center',fontSize:20,marginTop:h/50}}>Vendredi</h4>
                                <div style={{marginLeft:w/25}} >
                                    <Switch size={"small"}
                                            color="default"
                                            name="checkedA"
                                            checked={this.state.switchvendredi}
                                            onChange={() =>this.setState({
                                                switchvendredi: !this.state.switchvendredi
                                            })}
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    />
                                </div>
                                { this.state.switchvendredi===false?
                                    <div>
                                        <h3 style={{textAlign:'center',fontSize:14,color:'#367787'}}>Séance unique</h3>
                                        <text style={{marginLeft:w/35}}>Heure Debut</text>
                                        <div style={{marginLeft:w/25,width:40,height:40}}>
                                            <TimeInput
                                                mode='24h'
                                                value={this.state.vendredidebut}
                                                onChange={(date) =>this.setState({
                                                    vendredidebut: date
                                                })}
                                            />
                                        </div>
                                        <text style={{marginLeft:w/30}}>Heure Fin</text>
                                        <div style={{marginLeft:w/25,width:40,height:40}}>
                                            <TimeInput
                                                mode='24h'
                                                value={this.state.vendredifin}
                                                onChange={(date) =>this.setState({
                                                    vendredifin: date
                                                })}
                                            />
                                        </div>
                                    </div>   : <div>
                                        <h3 style={{textAlign:'center',fontSize:14,color:'#367787'}}>Double séance</h3>
                                        <text style={{marginLeft:w/100}}>Heure Debut/Pause</text>
                                        <Row>
                                            <div style={{marginLeft:w/60,width:40,height:40}}>
                                                <TimeInput
                                                    mode='24h'
                                                    value={this.state.vendredidebut}
                                                    onChange={(date) =>this.setState({
                                                        vendredidebut: date
                                                    })}
                                                />
                                            </div>
                                            <div style={{marginLeft:w/60,width:40,height:40}}>
                                                <TimeInput
                                                    mode='24h'
                                                    value={this.state.vendredipause}
                                                    onChange={(date) =>this.setState({
                                                        vendredipause: date
                                                    })}
                                                />
                                            </div>
                                        </Row>
                                        <text style={{marginLeft:w/80}}>Heure Retour/Fin</text>
                                        <Row>
                                            <div style={{marginLeft:w/60,width:40,height:40}}>
                                                <TimeInput
                                                    mode='24h'
                                                    value={this.state.vendrediretour}
                                                    onChange={(date) =>this.setState({
                                                        vendrediretour: date
                                                    })}
                                                />
                                            </div>
                                            <div style={{marginLeft:w/60,width:40,height:40}}>
                                                <TimeInput
                                                    mode='24h'
                                                    value={this.state.vendredifin}
                                                    onChange={(date) =>this.setState({
                                                        vendredifin: date
                                                    })}
                                                />
                                            </div>
                                        </Row>

                                    </div> }
                            </Col> : null }


                            { this.state.CheckedSamedi===true?

                            <Col  style={{marginLeft:5,width:w/9,height:h/2.5,alignSelf:'center',backgroundColor:"white"}}>
                                <h4 style={{textAlign:'center',fontSize:20,marginTop:h/50}}>Samedi</h4>
                                <div style={{marginLeft:w/25}} >
                                    <Switch size={"small"}
                                            color="default"
                                            name="checkedA"
                                            checked={this.state.switchsamedi}
                                            onChange={() =>this.setState({
                                                switchsamedi: !this.state.switchsamedi
                                            })}
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    />
                                </div>
                                { this.state.switchsamedi===false?
                                    <div>
                                        <h3 style={{textAlign:'center',fontSize:14,color:'#367787'}}>Séance unique</h3>
                                        <text style={{marginLeft:w/35}}>Heure Debut</text>
                                        <div style={{marginLeft:w/25,width:40,height:40}}>
                                            <TimeInput
                                                mode='24h'
                                                value={this.state.samedidebut}
                                                onChange={(date) =>this.setState({
                                                    samedidebut: date
                                                })}
                                            />
                                        </div>
                                        <text style={{marginLeft:w/30}}>Heure Fin</text>
                                        <div style={{marginLeft:w/25,width:40,height:40}}>
                                            <TimeInput
                                                mode='24h'
                                                value={this.state.samedifin}
                                                onChange={(date) =>this.setState({
                                                    samedifin: date
                                                })}
                                            />
                                        </div>
                                    </div>   : <div>
                                        <h3 style={{textAlign:'center',fontSize:14,color:'#367787'}}>Double séance</h3>
                                        <text style={{marginLeft:w/100}}>Heure Debut/Pause</text>
                                        <Row>
                                            <div style={{marginLeft:w/60,width:40,height:40}}>
                                                <TimeInput
                                                    mode='24h'
                                                    value={this.state.samedidebut}
                                                    onChange={(date) =>this.setState({
                                                        samedidebut: date
                                                    })}
                                                />
                                            </div>
                                            <div style={{marginLeft:w/60,width:40,height:40}}>
                                                <TimeInput
                                                    mode='24h'
                                                    value={this.state.samedipause}
                                                    onChange={(date) =>this.setState({
                                                        samedipause: date
                                                    })}
                                                />
                                            </div>
                                        </Row>
                                        <text style={{marginLeft:w/80}}>Heure Retour/Fin</text>
                                        <Row>
                                            <div style={{marginLeft:w/60,width:40,height:40}}>
                                                <TimeInput
                                                    mode='24h'
                                                    value={this.state.samediretour}
                                                    onChange={(date) =>this.setState({
                                                        samediretour: date
                                                    })}
                                                />
                                            </div>
                                            <div style={{marginLeft:w/60,width:40,height:40}}>
                                                <TimeInput
                                                    mode='24h'
                                                    value={this.state.samedifin}
                                                    onChange={(date) =>this.setState({
                                                        samedifin: date
                                                    })}
                                                />
                                            </div>
                                        </Row>

                                    </div> }
                            </Col> : null }


                            { this.state.CheckedDimanche===true?

                            <Col  style={{marginLeft:5,width:w/9,height:h/2.5,alignSelf:'center',backgroundColor:"white"}}>
                                <h4 style={{textAlign:'center',fontSize:20,marginTop:h/50}}>Dimanche</h4>
                                <div style={{marginLeft:w/25}} >
                                    <Switch size={"small"}
                                            color="default"
                                            name="checkedA"
                                            checked={this.state.switchdimanche}
                                            onChange={() =>this.setState({
                                                switchdimanche: !this.state.switchdimanche
                                            })}
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    />
                                </div>
                                { this.state.switchdimanche===false?
                                    <div>
                                        <h3 style={{textAlign:'center',fontSize:14,color:'#367787'}}>Séance unique</h3>
                                        <text style={{marginLeft:w/35}}>Heure Debut</text>
                                        <div style={{marginLeft:w/25,width:40,height:40}}>
                                            <TimeInput
                                                mode='24h'
                                                value={this.state.dimanchedebut}
                                                onChange={(date) =>this.setState({
                                                    dimanchedebut: date
                                                })}
                                            />
                                        </div>
                                        <text style={{marginLeft:w/30}}>Heure Fin</text>
                                        <div style={{marginLeft:w/25,width:40,height:40}}>
                                            <TimeInput
                                                mode='24h'
                                                value={this.state.dimanchefin}
                                                onChange={(date) =>this.setState({
                                                    dimanchefin: date
                                                })}
                                            />
                                        </div>
                                    </div>   : <div>
                                        <h3 style={{textAlign:'center',fontSize:14,color:'#367787'}}>Double séance</h3>
                                        <text style={{marginLeft:w/100}}>Heure Debut/Pause</text>
                                        <Row>
                                            <div style={{marginLeft:w/60,width:40,height:40}}>
                                                <TimeInput
                                                    mode='24h'
                                                    value={this.state.dimanchedebut}
                                                    onChange={(date) =>this.setState({
                                                        dimanchedebut: date
                                                    })}
                                                />
                                            </div>
                                            <div style={{marginLeft:w/60,width:40,height:40}}>
                                                <TimeInput
                                                    mode='24h'
                                                    value={this.state.dimanchepause}
                                                    onChange={(date) =>this.setState({
                                                        dimanchepause: date
                                                    })}
                                                />
                                            </div>
                                        </Row>
                                        <text style={{marginLeft:w/80}}>Heure Retour/Fin</text>
                                        <Row>
                                            <div style={{marginLeft:w/60,width:40,height:40}}>
                                                <TimeInput
                                                    mode='24h'
                                                    value={this.state.dimancheretour}
                                                    onChange={(date) =>this.setState({
                                                        dimancheretour: date
                                                    })}
                                                />
                                            </div>
                                            <div style={{marginLeft:w/60,width:40,height:40}}>
                                                <TimeInput
                                                    mode='24h'
                                                    value={this.state.dimanchefin}
                                                    onChange={(date) =>this.setState({
                                                        dimanchefin: date
                                                    })}
                                                />
                                            </div>
                                        </Row>

                                    </div> }
                            </Col> : null}

                    </Row>
                    </div>
                );
            case 2:
                return (
                    <div >
                        <h1 style={{alignSelf:'center',textAlign:'center',fontSize:35,fontWeight:'Bold',marginBottom:h/20}}>Choisir la dureé de votre visite</h1>
                        <Row className={'formulairepage2'} style={{marginBottom:h/4,alignSelf:'center'}}>
                        <TextField
                            onChange={(event) =>this.setState({
                                visitetime:event.target.value
                            })}
                            required={true} id="outlined-basic" type="number" label="Minutes" variant="outlined" />
                        </Row>
                    </div>
                );
            case 3:
                return (
                    <div >
                        <h1 style={{alignSelf:'center',textAlign:'center',fontSize:35,fontWeight:'Bold',marginBottom:h/20}}>Appliquer ces réglages</h1>
                        <Row className={'formulairepage2'} style={{marginBottom:h/4,alignSelf:'center'}} row={true}>
                            <DateRangePicker
                                small={false}
                                disableScroll={true}
                                startDatePlaceholderText={"De"}
                                endDatePlaceholderText={"Jusqu'a"}
                                startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                                endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                                onDatesChange={({ startDate, endDate }) =>  this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                                onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                                firstDayOfWeek={1}
                                displayFormat={"DD/MM/yyyy"}
                            />
                        </Row>
                    </div>
                );
        }
    }

        Makemin =()=>{
         let min = 24;
         if ( (this.state.CheckedLundi===true))
         {if ((this.state.lundidebut!==null)&&(this.state.lundidebut.getHours()<min))
         {min = this.state.lundidebut.getHours();}}

            if ( (this.state.CheckedMardi===true))
            {if ((this.state.mardidebut!==null)&&(this.state.mardidebut.getHours()<min))
            {min = this.state.mardidebut.getHours();}}

            if ( (this.state.CheckedMercredi===true))
            {if ((this.state.mercredidebut!==null)&&(this.state.mercredidebut.getHours()<min))
            {min = this.state.mercredidebut.getHours();}}

            if ( (this.state.CheckedJeudi===true))
            {if ((this.state.jeudidebut!==null)&&(this.state.jeudidebut.getHours()<min))
            {min = this.state.jeudidebut.getHours();}}

            if ( (this.state.CheckedVendredi===true))
            {if ((this.state.vendredidebut!==null)&&(this.state.vendredidebut.getHours()<min))
            {min = this.state.vendredidebut.getHours();}}

            if ( (this.state.CheckedSamedi===true))
            {if ((this.state.samedidebut!==null)&&(this.state.samedidebut.getHours()<min))
            {min = this.state.samedidebut.getHours();}}

            if ( (this.state.CheckedDimanche===true))
            {if ((this.state.dimanchedebut!==null)&&(this.state.dimanchedebut.getHours()<min))
            {min = this.state.dimanchedebut.getHours();}}


            theminmax.push(min) ;
            mini1 = min ;
        }

    MakeMax =()=>{
        let max = 0;
        if ( (this.state.CheckedLundi===true))
        {if ((this.state.lundifin!==null)&&(this.state.lundifin.getHours()>max))
        {max = this.state.lundifin.getHours()+1;}}

        if ((this.state.CheckedMardi===true))
        {if ((this.state.mardifin!==null)&&(this.state.mardifin.getHours()>max))
        {max = this.state.mardifin.getHours()+1;}}

        if ( (this.state.CheckedMercredi===true))
        {if ((this.state.mercredifin!==null)&&(this.state.mercredifin.getHours()>max))
        {max = this.state.mercredifin.getHours()+1;}}

        if ( (this.state.CheckedJeudi===true))
        {if ((this.state.jeudifin!==null)&&(this.state.jeudifin.getHours()>max))
        {max = this.state.jeudifin.getHours()+1;}}

        if ( (this.state.CheckedVendredi===true))
        {if ((this.state.vendredifin!==null)&&(this.state.vendredifin.getHours()>max))
        {max = this.state.vendredifin.getHours()+1;}}

        if ( (this.state.CheckedSamedi===true))
        {if ((this.state.samedifin!==null)&&(this.state.samedifin.getHours()>max))
        {max = this.state.samedifin.getHours()+1;}}

        if ( (this.state.CheckedDimanche===true))
        {if ((this.state.dimanchefin!==null)&&(this.state.dimanchefin.getHours()>max))
        {max = this.state.dimanchefin.getHours()+1;}}


        theminmax.push(max+1) ;
        maxi1 = max+1 ;
    }

        handleNext = () => {
        const { activeStep } = this.state;
        if ((activeStep===0)&&((this.state.CheckedLundi===true)||(this.state.CheckedMardi===true)||(this.state.CheckedMercredi===true)||(this.state.CheckedJeudi===true)||(this.state.CheckedVendredi===true)||(this.state.CheckedSamedi===true)||(this.state.CheckedDimanche===true)))
        this.setState({
            activeStep: activeStep + 1
        });

        if ((activeStep===2))
        {
            this.Makemin();

            this.setState({
                activeStep: activeStep + 1,
            });
            duree.push(this.state.visitetime);
        }



        if ((activeStep===3))
            {
                this.setState({
                    activeStep: activeStep + 1
                });
                startend.push(this.state.startDate);
                startend.push(this.state.endDate);
                s1=this.state.startDate ;
                s2 = this.state.startDate
                this.MakeMax() ;
            }

        if ((activeStep===3)&&(this.state.startDate===null)&&(this.state.endDate===null))
        {
            alert('Il faut choisir une durée');
            this.setState({
                activeStep: activeStep
            });

        }



        if ((activeStep===1))
            this.setState({
                activeStep: activeStep + 1
            });

            if ((activeStep===1))
            {
                if (this.state.CheckedDimanche===false)
                {daysoutwork.push(0)}
            if (this.state.CheckedLundi===false)
            {daysoutwork.push(1)}
            if (this.state.CheckedMardi===false)
            {daysoutwork.push(2)}
            if (this.state.CheckedMercredi===false)
            {daysoutwork.push(3)}
            if (this.state.CheckedJeudi===false)
            {daysoutwork.push(4)}
            if (this.state.CheckedVendredi===false)
            {daysoutwork.push(5)}
            if (this.state.CheckedSamedi===false)
            {daysoutwork.push(6)}

        }
        };


    handleBack = () => {

        const { activeStep } = this.state;
        this.setState({
            activeStep: activeStep - 1,
        });
    };

    handleOnquitter = async () => {

        {
            if((this.state.CheckedLundi===true))
            {

                const b=this.state.endDate;

                let now = moment(this.state.startDate);
                this.makeappointments(this.state.activeStep,this.state.CheckedLundi,this.state.lundidebut,this.state.lundifin,this.state.lundipause,this.state.lundiretour,this.state.switchlundi,now,b,mondays,1);}

            if((this.state.CheckedMardi===true))
            {
                const b=this.state.endDate;
                let now = moment(this.state.startDate);

                await this.makeappointments(this.state.activeStep,this.state.CheckedMardi,this.state.mardidebut,this.state.mardifin,this.state.mardipause,this.state.mardiretour,this.state.switchmardi,now,b,tuesdays,2);}


            if((this.state.CheckedMercredi===true))
            {
                const b=this.state.endDate;
                let now = moment(this.state.startDate);

                await this.makeappointments(this.state.activeStep,this.state.CheckedMercredi,this.state.mercredidebut,this.state.mercredifin,this.state.mercredipause,this.state.mercrediretour,this.state.switchmercredi,now,b,wednesdays,3);}

            if((this.state.CheckedJeudi===true))
            {
                const b=this.state.endDate;
                let now = moment(this.state.startDate);

                await this.makeappointments(this.state.activeStep,this.state.CheckedJeudi,this.state.jeudidebut,this.state.jeudifin,this.state.jeudipause,this.state.jeudiretour,this.state.switchjeudi,now,b,thursdays,4);}

            if((this.state.CheckedVendredi===true))
            {
                const b=this.state.endDate;
                let now = moment(this.state.startDate);

                await this.makeappointments(this.state.activeStep,this.state.CheckedVendredi,this.state.vendredidebut,this.state.vendredifin,this.state.vendredipause,this.state.vendrediretour,this.state.switchvendredi,now,b,fridays,5);}

            if((this.state.CheckedSamedi===true))
            {
                const b=this.state.endDate;
                let now = moment(this.state.startDate);

                await this.makeappointments(this.state.activeStep,this.state.CheckedSamedi,this.state.samedidebut,this.state.samedifin,this.state.samedipause,this.state.samediretour,this.state.switchsamedi,now,b,satrudays,6);}

            if((this.state.CheckedDimanche===true))
            {
                const b=this.state.endDate;
                let now = moment(this.state.startDate);

                await this.makeappointments(this.state.activeStep,this.state.CheckedDimanche,this.state.dimanchedebut,this.state.dimanchefin,this.state.dimanchepause,this.state.dimancheretour,this.state.switchdimanche,now,b,sundays,0);}



        }


        this.setState({redirect: true});
    }

    makeappointments=(as,cd,dd,df,dp,dr,sd,start,ed,tab,numberday)=>{
        if ((as>=3)&&(cd===true)&&(dd!==null)&&(df!==null)&&(dp!==null)&&(dr!==null)&&(sd===true))
        {

            i=0;
              let  std = start ;
            {  while (std.week() <= ed.week()  ) {

                if (std.day()===numberday)
                {

                    tab.push(std.date());
                    std.add(1, 'days');

                    if (mini2 < dd.getMinutes()+0)
                    {mydata.push(
                        {
                            title: 'Hors Travail',
                            startDate: new Date(std.year()+0, std.month()+0,tab[i]+0, dp.getHours()+0, dp.getMinutes()+0),
                            endDate: new Date(ed.year()+0, ed.month()+0, tab[i]+0,dr.getHours()+0, dr.getMinutes()+0),
                            id: k,
                            type: 1,
                        }
                    ); }
                    k=k+1;
                    mydata.push(
                        {
                            title: 'Hors Travail1',
                            startDate: new Date(std.year()+0, std.month()+0,tab[i]+0, mini1+0, mini2+0),
                            endDate: new Date(ed.year()+0, ed.month()+0, tab[i]+0,dd.getHours()+0, dd.getMinutes()+0),
                            id: k,
                            type: 1,
                        }
                    );
                    k=k+1;
                     mydata.push(
                        {
                            title: 'Hors Travail2',
                            startDate: new Date(std.year()+0, std.month()+0,tab[i]+0, df.getHours()+0, df.getMinutes()+0),
                            endDate: new Date(ed.year()+0, ed.month()+0, tab[i]+0,maxi1+0, maxi2+0),
                            id: k,
                            type: 1,
                        }
                    );
                    k=k+1;
                    i = i+1
                }
                if (std.day()!==numberday)
                {std.add(1, 'days');}
            }


            }


        }


        if ((as>=3)&&(cd===true)&&(dd!==null)&&(df!==null)&&(sd===false))
        {
            i=0;
            let  std = start ;
            { while (std.week() <= ed.week()   ) {

                if (std.day()===numberday)
                {


                    tab.push(std.date());
                    std.add(1, 'days');


                    if (mini2 < dd.getMinutes()+0)
                    {
                    mydata.push(
                        {
                            title: 'Hors Travail',
                            startDate: new Date(std.year()+0, std.month()+0,tab[i]+0, mini1+0, mini2+0),
                            endDate: new Date(ed.year()+0, std.month()+0, tab[i]+0,dd.getHours()+0, dd.getMinutes()+0),
                            id: k,
                            type: 1,
                        }
                    );}
                    k= k+1;

                    mydata.push(
                        {
                            title: 'Hors Travail1',
                            startDate: new Date(std.year()+0, std.month()+0,tab[i]+0, df.getHours()+0, df.getMinutes()+0),
                            endDate: new Date(ed.year()+0, ed.month()+0, tab[i]+0,maxi1+0, maxi2+0),
                            id: k,
                            type: 1,
                        }
                    );
                    k= k+1;
                    i = i+1
                }
                if (std.day()!==numberday)
                {std.add(1, 'days');}
            }

            }

        }



    }

    render() {
        const { activeStep } = this.state;
        if (this.state.redirect) {
            return <Redirect push to="/Agenda" />;
        }


        return (
            <React.Fragment style={{ background: '#fff', padding: 24, minHeight:h/1.1,backgroundColor:'#ebebeb' }} >
                <Stepper  style={{backgroundColor:'transparent' }} activeStep={activeStep}>
                    <Step key={0}>
                        <StepLabel>Step1</StepLabel>
                    </Step>
                    <Step key={1}>
                        <StepLabel>Step2</StepLabel>
                    </Step>
                    <Step key={2}>
                        <StepLabel>Step3</StepLabel>
                    </Step>
                    <Step key={3}>
                        <StepLabel>Step4</StepLabel>
                    </Step>
                </Stepper>
                <div>
                    {activeStep === this.getNumberOfSteps() ? (
                        <div  className={'formulairepage2'}>
                            <h1 style={{alignSelf:'center',textAlign:'center',fontSize:35,fontWeight:'Bold',marginTop:h/10,marginBottom:h/10,color:"#367787"}}>✓✓✓   Votre agenda est bien configurée   ✓✓✓</h1>
                            <h1 style={{alignSelf:'center',textAlign:'center',fontSize:35,fontWeight:'Bold',marginTop:h/10,marginBottom:h/10,color:"#367787"}}>{this.maxtiming}</h1>

                            <div  style={{marginLeft:w/2.8,marginBottom:h/10,alignSelf:'center'}}>
                                    <button
                                        variant="outlined"
                                        color="primary"
                                        onClick={()=>{this.handleOnquitter().then()}}
                                        style={{marginLeft:w/40}}
                                    >
                                        Quitter
                                    </button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            {
                                // Populate the content pane based on the active step
                                this.getStepContent(activeStep)
                            }
                            <div style={{marginLeft:w/3.3,marginBottom:h/10,alignSelf:'center'}}>
                                <Button
                                    variant="outlined"
                                    color="default"
                                    onClick={this.handleBack}
                                >
                                    Précédent
                                </Button>
                                <Button variant="outlined"
                                          color="primary"
                                             onClick={this.handleNext}
                                        style={{marginLeft:w/20}}
                                >
                                    {activeStep === this.getNumberOfSteps() - 1 ? 'Terminer' : 'Suivant'}
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </React.Fragment>
        );
    }
}
