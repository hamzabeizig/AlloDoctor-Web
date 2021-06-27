import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { green, lightBlue } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {
    ViewState, EditingState, GroupingState, IntegratedGrouping, IntegratedEditing,
} from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    Resources,
    Appointments,
    AppointmentTooltip,
    AppointmentForm,
    DragDropProvider,
    GroupingPanel,
    WeekView,
    MonthView,
    Toolbar,
    ViewSwitcher, DateNavigator,
} from '@devexpress/dx-react-scheduler-material-ui';
import {mydata as appointments} from "./GestionAgenda";

import {daysoutwork,startend,duree ,theminmax,jours} from "./GestionAgenda";
import moment from "moment";
import {rendezvous } from "./Page3";


const typesdata = [
    { text: 'Hors Travail', id: 1, color: "grey" },
    { text: 'Travail', id: 2, color: "#55ccdf" },
];
const daysworking= [];
const years= [];
const months= [];
const days= [];

const Jours = [] ;
const Time = [];
const plan = [];
const etat = [];
export default class Agenda extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            mydata: appointments.filter(appointment => appointment.type < 3),
            resources: [{
                fieldName: 'type',
                title: 'Type',
                instances: typesdata,
            }],
            grouping: [{
                resourceName: 'type',
            }],
             curTime : Date(),
            ut:false,
            daysoutwork:daysoutwork,
            startend:startend,
            duree: duree,
            theminmax:theminmax,


    };

        this.commitChanges = this.commitChanges.bind(this);

    }

    commitChanges({ added, changed, deleted }) {
        this.setState((state) => {
            let { mydata } = state;
            if (added) {
                const startingAddedId = mydata.length > 0 ? mydata[mydata.length - 1].id + 1 : 0;
                mydata = [...mydata, { id: startingAddedId, ...added }];
            }
            if (changed) {
                mydata = mydata.map(appointment => (
                    changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
            }
            if (deleted !== undefined) {
                mydata = mydata.filter(appointment => appointment.id !== deleted);
            }
            return { mydata };
        });
    }
    dayswork(){
        let j =0;
        for (var i=0;i<7;i++)
        {
            if (daysoutwork[j]===i)
            {daysworking.push(false);
                j=j+1;}
            else {{daysworking.push(true)}
            }
        }

    }
    makedays() {

        {
            let s1 = moment(startend[0] );
            let s2= moment(startend[1] );

            while  (s1<=s2)
            {
                if ((daysworking[s1.day()]===true))
                {Jours.push({"jour":s1.toString()+" (CET)"});
                years.push(s1.year());
                months.push(s1.month());
                days.push(s1.date())
                    s1.add(1, 'days');
                }
                if ((daysworking[s1.day()]===false))
                {
                    s1.add(1, 'days');
                }


            }
            alert(JSON.stringify(Jours));

        }
    }
    MakeTime() {
let Time1=[];
        let tab = Jours;
       let  min = theminmax[0];
        let max = theminmax[1];
        for (var i=0;i<tab.length;i++)
        {   var mynewdate = new Date();
            mynewdate.setHours(min);
            mynewdate.setMinutes(0);
            mynewdate.setFullYear(years[i]);
            mynewdate.setMonth(months[i]);
            mynewdate.setDate(days[i]);
            var mynewdatemax = new Date();
            mynewdatemax.setHours(max);
            mynewdatemax.setMinutes(0);
            mynewdatemax.setFullYear(years[i]);
            mynewdatemax.setMonth(months[i]);
            mynewdatemax.setDate(days[i]);

                let j = 0 ;
                while(mynewdate<mynewdatemax)
                {
                    if (mynewdate.getMinutes()!==0)
                    {Time1.push(mynewdate.getHours().toString()+":"+mynewdate.getMinutes());}

                    if (mynewdate.getMinutes()===0)
                    {Time1.push(mynewdate.getHours()+":"+mynewdate.getMinutes()+"0");}

                    mynewdate.setMinutes( mynewdate.getMinutes() + parseInt(duree[0]) );
                }
                Time.push(Time1);
                Time1=[];
            }
        alert(JSON.stringify(Time));


    }
    makeetat() {


        let etat1 = [];

        for (let h = 0; h < Jours.length; h++) {
            var jr = new Date(Jours[h].jour);
            jr.setHours(parseInt(theminmax[0]));
            jr.setMinutes(0);
            while (jr.getHours() < theminmax[1]) {

                for (var k = 0; k < this.state.mydata.length; k++) {


                    if (this.state.mydata[k].startDate.getDate() === jr.getDate()) {

                        if ((this.state.mydata[k].startDate.getTime() <= jr.getTime()) && (jr.getTime() <= this.state.mydata[k].endDate.getTime())) {
                            etat1.push("red");

                            jr.setMinutes(jr.getMinutes() + parseInt(duree[0]));
                        } else {
                            etat1.push("green");
                            jr.setMinutes(jr.getMinutes() + parseInt(duree[0]));
                        }
                    }
                }
            }
            etat[h] = etat1;
            etat1 = [];
        }


    }
    makeplan() {
        let plan1=[];
        for (var i = 0; i <Jours.length; i++)
        {
            plan1=[];
            for (var j = 0; j <Time[i].length; j++)
            {
                plan1.push({"time":Time[i][j],"etat":etat[i][j]});

            }
            plan.push(plan1);
        }

    }
    callApi = async () => {
        const token = await localStorage.getItem("token");
        const response = await fetch('/gettimeplan',{
            headers:new Headers({
                Authorization:"Bearer "+token
            })
        });
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    };
   concattabs() {
        this.state.mydata=this.state.mydata.concat(rendezvous);

    }
     componentDidMount  =async ()=> {
         this.concattabs();

        this.dayswork();
         this.makedays();
         this.MakeTime();
         this.makeetat();
         this.makeplan();

         this.callApi()
             .then(res => this.setState({ rvd: res.express }))
             .catch(err => console.log(err));
         let data  =await localStorage.getItem('data');
         let daysoutwork  =await localStorage.getItem('daysoutwork');
         let startend  =await localStorage.getItem('startend');
         let duree  =await localStorage.getItem('duree');
         let theminmax  =await localStorage.getItem('theminmax');

         console.log(data)
         console.log(daysoutwork)
         console.log(startend)
         console.log(duree)
         console.log(theminmax)

         if (data)
         {
            await this.setState({mydata:JSON.parse(data),ut:true});
             console.log("2")
             await  this.setState({daysoutwork:JSON.parse(daysoutwork)});
             console.log("3")
             await  this.setState({startend:JSON.parse(startend)});
             console.log("4")
             await this.setState({theminmax:JSON.parse(theminmax)});
             console.log("5")
             await this.setState({duree:JSON.parse(duree)});
             console.log("6")

             alert(1);

         }
         else {
             console.log(this.state.mydata)
             localStorage.setItem('data',JSON.stringify(this.state.mydata));
             localStorage.setItem('daysoutwork',JSON.stringify(this.state.daysoutwork));
             localStorage.setItem('startend',JSON.stringify(this.state.startend));
             localStorage.setItem('duree',JSON.stringify(this.state.duree));
             localStorage.setItem('theminmax',JSON.stringify(this.state.theminmax));
this.setState({ut:true});
             alert(2);

         }
         }
    render() {


        const {
            mydata, resources
        } = this.state;

        return (
            this.state.ut===false ?
                null
           : <React.Fragment>
                <Paper>
                    <Scheduler
                        data={mydata}
                        height={500}
                        firstDayOfWeek={1}
                        startDate={this.state.startend[0]}
                        endDate={this.state.startend[1]}
                    >

                        <ViewState
                            defaultCurrentDate={this.state.curTime}
                        />
                        <EditingState
                            onCommitChanges={this.commitChanges}
                        />

                        <WeekView
                            cellDuration={this.state.duree[0]}
                            startDayHour={this.state.theminmax[0]}
                            endDayHour={this.state.theminmax[1]}
                            excludedDays={this.state.daysoutwork}
                        />

                        <Appointments />
                        <Resources
                            data={resources}
                        />
                        <IntegratedEditing />

                        <AppointmentTooltip />
                        <AppointmentForm />
                        <Toolbar/>
                        <DateNavigator />
                    </Scheduler>
                </Paper>
            </React.Fragment>
        );
    }
}
