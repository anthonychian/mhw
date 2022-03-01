import React from 'react'
import ArmorIcon from "./ArmorIcon";
import SlotIcon from "./SlotIcon";

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    tooltip: {
      background: '#1a1c1a',
    },
  });

export default function ArmorItem ({ 
    item,
    selectedHead,
    selectedChest,
    selectedGloves,
    selectedWaist,
    selectedLegs,
    handleListItemClick
    }) {

    const classes = useStyles();

    let isSelected = selectedHead.id === item.id || selectedChest.id === item.id || selectedGloves.id === item.id || selectedWaist.id === item.id || selectedLegs.id === item.id

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
                    sx={{ 
                        width: '100%', 
                        maxWidth: 360, 
                        backgroundColor: "#1F2023",
                        '&:hover': {
                            backgroundColor: "#1F2023",
                            color: 'black',
                            opacity: 0.5,
                        },
                    }}
                    selected={isSelected}
                    onClick={() => {
                        handleListItemClick( item.id, item.type, item.name, itemSkills, item.slots)
                    }}
                >
                    <ListItemIcon>
                        <ArmorIcon type={item.type} />
                    </ListItemIcon>

                    <ListItemText sx={{ color: 'white' }}primary={item.name} />
                    
                </ListItemButton>
            </Tooltip>

            <Divider />
        </>
    )
}
