import {Batting, Bowling, Cricketer, ODICareer, TestCareer} from "./Cricketer";
import {Button, Layout} from "antd";
import React, { useState } from 'react';
import CareerDetails from "./CareerDetails";
var w = window.innerWidth;
var h = window.innerHeight;

export default function Page1() {
    const [selectedPlayer, setSelectedPlayer] = useState('');
    const [visible, setVisible] = useState(false);
    const onSelect = name => {
        setSelectedPlayer(name);
        setVisible(true);
    }
    const ViewProfileButton = ({name}) => {
        return <Button type='dashed' style={{float:'right'}} onClick={()=>onSelect(name)}> View Full Profile >> </Button>
    }

    const onClose = () => setVisible(false);
    return(

    <div style={{ background: '#fff', padding: 24, minHeight:h/1.1,backgroundColor:'#ebebeb' }}>
        <Cricketer name='Virat Kohli' team='IND' avatarSrc='./vk.jpg'>
            <ODICareer matches='239' >
                <Batting runs='11,520' score='183' />
                <br></br>
                <Bowling wickets='4' bowlingAvg='166.25' />
            </ODICareer>
            <TestCareer matches=' 79' >
                <Batting runs='6,749' score='243' />
            </TestCareer>
            <ViewProfileButton name='Virat Kohli'/>
        </Cricketer>
        <Cricketer name='Jasprit Bumrah' team='IND' avatarSrc='./jb.jpg'>
            <TestCareer matches='12' >
                <Bowling wickets='62' bowlingAvg='20.63' />
            </TestCareer>
            <ViewProfileButton name='Jasprit Bumrah'/>
        </Cricketer>
        <CareerDetails player={selectedPlayer} visible={visible} onClose={onClose} />

    </div>
) ;
}
