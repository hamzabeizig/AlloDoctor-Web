import React, { useState } from 'react';
import GestionAgenda from "./GestionAgenda";
import GestionStatistic from "./GestionStatistic";

var w = window.innerWidth;
var h = window.innerHeight;

export default function PageYYY() {

    return(

        <div style={{ width:w-w/7 ,background: '#fff', padding: 24, minHeight:h/1.1,backgroundColor:'#ebebeb' }}>
            <GestionStatistic/>

        </div>
    ) ;
}
