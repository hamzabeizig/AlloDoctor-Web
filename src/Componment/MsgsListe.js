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
            listmsgs:[
                {
                    msg:"Je suis disponible a tout moment monsieur ",
                    sendername: "Beizig Hamza",
                    time: "10:30",
                    thepic: photo,

                },
                { msg:"Je veux parler de ma derniere visite ",
                    sendername: "Salem ben Ahmed",
                    time: "10:25",
                    thepic: photo,

                },
                { msg:"Merci pour la derniere visite ",
                    sendername: "Radhi souid",
                    time: "10:20",
                    thepic: photo,

                },
                { msg:"Merci pour la derniere visite, je vais trés bien ! Mercii ",
                    sendername: "Mohamed Toumi",
                    time: "10:20",
                    thepic: photo,

                },
            ],
        }
    }


    render() {
        for (var j = 0; j < this.state.listmsgs.length; j++)
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

        var count = this.state.listmsgs.length -  counttabs ;

        return (


            <List style={{width: 400,
                backgroundColor: '#ffffff',
                top:70,
                right:80,
                position:'absolute',
                maxHeight: 350,
                overflow: 'auto',
                borderRadius:20}}>
                <ListItemText  style={{top:5, backgroundColor:"#ffffff",height:20,alignItems:'flex-start'}}
                              primary={
                                  <div style={{marginLeft:20,fontSize:11,color:'#1aa8fd',fontWeight:'bold'}}>
                                      <text>({count})</text>
                                      <Link  component="a"
                                             style={{marginLeft:260,color:'grey',fontSize:9,alignSelf:'flex-start'}}> Nouveau message </Link>
                                  </div>}
                />
                <Divider/>
                { this.state.listmsgs.map((item, i) => (
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
                                fontSize:13,
                                color:'grey'}}>
                                <h3 style={{  display: 'inline',
                                    fontSize:16,
                                    color:'black'}}> {item.sendername}<br/></h3>
                                <h4 style={{  display: 'inline',
                                    fontSize:13,
                                    color:'grey'}}>{ ((item.msg).length > 35) ?
                                    (((item.msg).substring(0,35)) + '...') :
                                    item.msg }</h4>
                            </React.Fragment>
                        }
                        secondary={item.time}
                    />

                      </ListItem>    ))}
            </List>
        );
    }
}

