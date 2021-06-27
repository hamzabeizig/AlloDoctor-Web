import React from "react";
import {BarGraph, LineGraph} from 'carbon-addons-data-viz-react';

import './App.css';
import {Col, Row} from "antd";
import PieChart from "carbon-addons-data-viz-react/cjs/components/PieChart/PieChart";
import 'antd/dist/antd.css';
import GaugeGraph from "carbon-addons-data-viz-react/cjs/components/GaugeGraph/GaugeGraph";

var w = window.innerWidth;
var h = window.innerHeight;
const data1 = [[[50], 1],[[4], 2],[[12], 3],[[50], 4],[[5], 5],[[7], 6],[[2], 7],[[5], 8],[[5], 9],[[5], 10],[[20], 11],[[9], 12],[[5], 13],[[7], 14],[[5], 15],[[5], 16],[[5], 17],[[5], 18],[[5], 19],[[5], 20],[[16], 21],[[8], 22],[[16], 23],[[5], 24],[[17], 25],[[17], 26],[[5], 27],[[17], 28],[[15], 29],[[2], 30]];
const data2 = [[['-20'], 20],[['20-60'], 35],[['60+'], 45]];
const data3 = [[['-10'], 45],[['20-70'], 45],[['70+'], 10]];
const data4 = [[['-20'], 25],[['20-60'], 25],[['60+'], 50]];
export default class GestionStatistic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render () {
        return (
            <div  >
           <Row   style={{ background: '#fff', padding: 24, minHeight:h/2.5,backgroundColor:'#ebebeb' }} >
                <BarGraph xAxisLabel={"nombre de rendez-vous par jour le mois denier"} color={['#ffb800','#55ccdf']} labelOffsetY={65} labelOffsetX={65} height={h/2.5} width={w/1.3} data={data1}/>
           </Row>
           <Row   style={{ width:w-w/6, background: '#fff',  minHeight:h/5,backgroundColor:'#ebebeb' ,marginLeft:50 }}>
               <Col  style={{width:380, padding: 24, minHeight:h/5 }}>
              <PieChart color={['#292929','#ffb800','#55ccdf']} data={data2}/>
               </Col>
               <Col  style={{width:380, padding: 24, minHeight:h/5 }}>
                   <PieChart color={['#ffb800','#55ccdf','#292929']} data={data3}/>
               </Col>
               <Col  style={{width:370, padding: 24, minHeight:h/5 }}>
                   <PieChart color={['#292929','#ffb800','#55ccdf']} data={data4}/>
               </Col>
           </Row>
            </div>
        );
    }


}
