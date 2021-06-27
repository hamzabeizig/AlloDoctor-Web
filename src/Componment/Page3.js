import React from "react";

import './App.css';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField/TextField";
import {Batting, Bowling, Cricketer, ODICareer, TestCareer} from "./Cricketer";
import Button from '@material-ui/core/Button';
import {duree} from "./GestionAgenda";
import update from 'react-addons-update';

var w = window.innerWidth;
var h = window.innerHeight;
export const rendezvous = [
];
export const data = [
];
let k = 0;

export default class Page3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           rdv:[{ idUser :"5f036754ba88215dcc3d5678",
            jour:"Wed Jul 08 2020 12:00:00 GMT+0100 (CET)",
            etat:"en attente",
            time:"09:30",
            type:"Rdv personnel",
            relation:null,
            nom:"a",
            prenom:"a",
            adresse:"a",
            sexe:"Homme",
            ville:"a",
            visite:"Oui",
            cnam:"a",
            tel:"aaaaaaaa",},

               { idUser :"5f036754ba88215dcc3d5678",
               jour:"Thu Jul 09 2020 12:00:00 GMT+0100 (CET)",
               etat:"en attente",
               time:"09:30",
               type:"Rdv personnel",
               relation:"fils",
               nom:"b",
               prenom:"a",
               adresse:"a",
               sexe:"Homme",
               ville:"a",
               visite:"Oui",
               cnam:"a",
               tel:"aaaaaaaa",},{ idUser :"5f036754ba88215dcc3d5678",
                   jour:"Wed Jul 08 2020 12:00:00 GMT+0100 (CET)",
                   etat:"en attente",
                   time:"09:30",
                   type:"Rdv personnel",
                   relation:null,
                   nom:"a",
                   prenom:"a",
                   adresse:"a",
                   sexe:"Homme",
                   ville:"a",
                   visite:"Oui",
                   cnam:"a",
                   tel:"aaaaaaaa",},

               { idUser :"5f036754ba88215dcc3d5678",
                   jour:"Wed Jul 08 2020 12:00:00 GMT+0100 (CET)",
                   etat:"en attente",
                   time:"09:30",
                   type:"Rdv personnel",
                   relation:"fils",
                   nom:"b",
                   prenom:"a",
                   adresse:"a",
                   sexe:"Homme",
                   ville:"a",
                   visite:"Oui",
                   cnam:"a",
                   tel:"aaaaaaaa",}]
        }
    }

handlevalide(item,i) {
    let date1= new Date(item.jour);
    let min = item.time;
    alert(min);
    date1.setTime(JSON.stringify(min));
    alert(date1);
    let date2=new Date(item.jour);
    rendezvous.push(
        {
            title: 'Rendez-vous',
            startDate: new Date(date1),
            endDate: new Date(date2),
            id: k,
            type: 2,
        })
    k=k+1;

    this.setState(update(this.state, {

        rdv: {
            [i]: {
                $set: {etat:"accept"}
            },

        }

    }));
}
    handlerefuser(item,i) {

        this.setState(update(this.state, {

            rdv: {
                [i]: {
                    $set: {etat:"refuse"}
                },

            }

        }));
    }

    render () {
        return (
            <div style={{ background: '#fff', padding: 24, minHeight:h/1.1,backgroundColor:'#ebebeb' }}>
                { this.state.rdv.map((item, i) => (

                    <div>
                        { item.etat==="en attente"?
                    <Cricketer name={item.nom+" "+item.prenom} avatarSrc='./vk.jpg'>
                        <ODICareer  >
                            <Batting  jour={item.jour} time={item.time} type={item.type} relation={item.relation}  adresse={item.adresse} sexe={item.sexe} ville={item.ville} visite={item.visite} cnam={item.cnam} tel={item.tel} />
                            <br></br>
                        </ODICareer>
                        <TestCareer  >
                            <Button key={i} onClick={()=>{this.handlevalide(item,i)}}>Valider</Button>
                            <Button  key={i}  onClick={()=>{this.handlerefuser(item,i)}} style={{marginLeft:20}}>Refuser</Button>
                        </TestCareer>
                    </Cricketer>:null}
                    </div>
                      ))
                }
            </div>
        );
    }


}
