import React from 'react'
import ArmorIcon from "./ArmorIcon";
import SlotIcon from "./SlotIcon";

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';

import { makeStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux'
import { equipArmor } from '../redux/actions'

const useStyles = makeStyles({
    tooltip: {
      background: '#1a1c1a',
    },
    listItemSelected: {
        width: '100%', 
        maxWidth: 360, 
        backgroundColor: "#1F2023",
        '& .MuiListItemText-primary': {
            color: 'white',
        },
        "&.Mui-selected": {
            backgroundColor: 'black',
            '&:hover': {
                backgroundColor: "black",
            },
            '& .MuiListItemText-primary': {
                color: 'white',
                fontWeight: 'bold',
            },
        },
        '&:hover': {
            opacity: 0.7,
            '& .MuiListItemText-primary': {
                color: 'yellow',
            },
        },
    },
});

function ArmorItem ({ 
    item,
    armors, 
    onEquipPressed, }) {

    const classes = useStyles();

    let itemSkills = []
    item.skills.forEach(skill => {
        itemSkills.push(skill.skillName + " " + skill.level)
    })


    return (
        <>
            <Tooltip
                classes={classes}
                title={
                    <>
                        {itemSkills.map(skill => 
                            <h2 key={skill} style={{ color: "yellow"}}>
                                {`${skill.slice(0, -1)} x${skill.slice(-1)}`}
                            </h2>
                        )}
                        {Object.values(item.slots).map((slot, idx) => 
                            <SlotIcon key={idx} number={slot.rank} />
                        )}
                    </>
                }
                disableInteractive>

                <ListItemButton
                    // sx={{ 
                    //     width: '100%', 
                    //     maxWidth: 360, 
                    //     backgroundColor: "#1F2023",
                    //     '&:hover': {
                    //         backgroundColor: "#1F2023",
                    //         color: 'black',
                    //         opacity: 0.5,
                    //     },
                    // }}
                    classes={{root: classes.listItemSelected }}
                    selected={armors.some(armor => armor['name'] === item.name )}
                    onClick={() => {
                        onEquipPressed(item.id, item.type, item.name, itemSkills, item.slots)
                    }}
                >
                    <ListItemIcon>
                        <ArmorIcon type={item.type} />
                    </ListItemIcon>

                    <ListItemText 
                        
                        primary={item.name} />
                    
                </ListItemButton>
            </Tooltip>

            <Divider />
        </>
    )
}

const mapStateToProps = state => ({
    armors: state.armors,
})

const mapDispatchToProps = dispatch => ({
    onEquipPressed: (id, type, name, skills, slots) => dispatch(equipArmor(id, type, name, skills, slots)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ArmorItem)
