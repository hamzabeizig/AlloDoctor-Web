import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import photo from '../Images/hamza.jpg'
import update from 'react-addons-update';
import {Link} from "@material-ui/core";
import ListSubheader from '@material-ui/core/ListSubheader';

export default class MsgsListe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colorbacks:[],
            pressed:[],
            listnotifs:[
                {
                    notif:"a demandé un rendez-vous pour le 28/06/2020 à 16:00",
                    sendername: "Beizig Hamza",
                    time: "10:30",
                    thepic: photo,

                },
                { notif:"a annulé son rendez-vous pour le 25/06/2020 à 14:30",
                    sendername: "Salem Gabsi",
                    time: "10:25",
                    thepic: photo,

                },
                { notif:"a demandé un rendez-vous pour le 28/06/2020 à 16:00",
                    sendername: "Rami ben jasser",
                    time: "10:20",
                    thepic: photo,

                },
                { notif:"a demandé un rendez-vous pour le 29/06/2020 à 16:00",
                    sendername: "Mourad Ahmed",
                    time: "10:20",
                    thepic: photo,

                },
            ],
        }
    }

    touslu   = () => {
        for(var j = 0; j <  this.state.listnotifs.length; j++)
        {
            this.state.colorbacks[j]='white';
            this.state.pressed[j]=1;
            this.setState(update(this.state, {
                colorbacks: {
                    [j]: {
                        $set: 'white'
                    },

                },
                pressed:{
                    [j]:{
                        $set: 1
                    }
                }
            })) ;
        }         }
    render() {

        for (var j = 0; j < this.state.listnotifs.length; j++)
        {
            this.state.colorbacks.push('#f5f5f5');
            this.state.pressed.push(0);
        }

        let counttabs = 0;
        for(var k = 0; k <  this.state.pressed.length; k++)
        {
            if( this.state.pressed[k] === 1)
                counttabs++;
        }

        var count = this.state.listnotifs.length -  counttabs ;

        return (


            <List style={{width: 400,
                backgroundColor: '#ffffff',
                top:70,
                right:120,
                position:'absolute',
                maxHeight: 350,
                overflow: 'auto',
                borderRadius:20}}>
                <ListItemText  style={{top:5, backgroundColor:"#ffffff",height:20,alignItems:'flex-start'}}
                               primary={
                                   <div style={{marginLeft:20,fontSize:11,color:'#1aa8fd',fontWeight:'bold'}}>
                                       <text>({count})</text>
                                       <Link onClick={this.touslu} component="a"
                                              style={{marginLeft:220,color:'grey',fontSize:9,alignSelf:'flex-start'}}> Marquer tous comme lu </Link>
                                   </div>}
                />
                <Divider/>
                { this.state.listnotifs.map((item, i) => (
                    <ListItem style={{height:90, backgroundColor:this.state.colorbacks[i]}} divider={true } button={true} alignItems="flex-start" onClick={() =>this.setState(update(this.state, {
                        colorbacks: {
                            [i]: {
                                $set: 'white'
                            },

                        },
                        pressed: {
                            [i]: {
                                $set: 1
                            },

                        }
                    }))}>

                        <ListItemAvatar>
                            <Avatar src={item.thepic} />
                        </ListItemAvatar>

                        <ListItemText
                            primary={
                                <React.Fragment style={{  display: 'inline',
                                    fontSize:12,
                                    color:'grey'}}>
                                    <h3 style={{  display: 'inline',
                                        fontSize:15,
                                        color:'black'}}> {item.sendername}<br/></h3>
                                    <h4 style={{  display: 'inline',
                                        fontSize:13,
                                        color:'grey'}}>
                                        { ((item.notif).length > 35) ?
                                            (((item.notif).substring(0,35)) + '...') :
                                            item.notif }
                                    </h4>
                                </React.Fragment>
                            }
                            secondary={item.time}
                        />

                    </ListItem>    ))}
            </List>
        );
    }
}

