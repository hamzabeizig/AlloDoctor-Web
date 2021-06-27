import React, { useState } from 'react';
import Agenda from "./Agenda";

var w = window.innerWidth;
var h = window.innerHeight;

export default function PageY() {

    return(

        <div style={{ background: '#fff', padding: 24, minHeight:h/1.1,backgroundColor:'#ebebeb' }}>
            <h1 style={{alignSelf:'center',textAlign:'center',fontSize:20}}>Mon emploi du temps</h1>
            <Agenda/>
        </div>
    ) ;
}
