import React, { useState } from 'react';
import Agenda from "./Agenda";
import GestionAgenda from "./GestionAgenda";
var w = window.innerWidth;
var h = window.innerHeight;
export default function PageYY() {

    return(

        <div style={{ width:w-w/7, background: '#fff', padding: 24, minHeight:h/1.1,backgroundColor:'#ebebeb' }}>
            <h1 style={{alignSelf:'center',textAlign:'center',fontSize:20}}>Gestion d'emploi du temps</h1>
            <GestionAgenda/>
        </div>
    ) ;
}
