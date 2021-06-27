import React, { Fragment } from 'react';
import { Card, Avatar } from 'antd';
import Meta from 'antd/lib/card/Meta';
import Title from 'antd/lib/typography/Title';
export const Cricketer = ({ name, team, avatarSrc, children }) =>
    <Card bordered style={{ width: 300, float: 'left', margin: 10 }}>
        <Meta
            avatar={<Avatar src={avatarSrc} />}
            title={name}
        />
        <hr></hr>
        Demande
        <br></br>
        {children}
    </Card>
export const ODICareer = ({ matches, children }) =>
    <Card.Grid style={{ width: '100%' }}>
        <Title level={4}> Infos : {matches}</Title>
        {children}
    </Card.Grid>
export const TestCareer = ({ matches, children }) =>
    <Card.Grid style={{ width: '100%' }}>
        <Title level={4}>Validation: {matches}</Title>
        {children}
    </Card.Grid>
export const Batting = ({ jour, time,type,relation ,adresse,sexe,ville,visite,cnam,tel}) =>
    <Fragment>
        jour : {jour}
        <br></br>
        Heure : {time}
        <br></br>
        type : {type}
        <br></br>
        adresse : {adresse}
        <br></br>
        ville: : {ville}
        <br></br>
        sexe : {sexe}
        <br></br>
        Nouveau patient : {visite}
        <br></br>
        Num CNAM : {cnam}
        <br></br>
        Telephone: : {tel}
        <br></br>
        {relation!==null?"relation: "+relation:null}
    </Fragment>
export const Bowling = ({ wickets, bowlingAvg }) =>
    <Fragment>
        Wicktes : {wickets}
        <br></br>
        Bowling Average : {bowlingAvg}
    </Fragment>
