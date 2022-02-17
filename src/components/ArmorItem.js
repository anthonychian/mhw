import ArmorIcon from "./ArmorIcon";
import React from 'react'

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';

export default function ArmorItem ({ 
    item,
    selectedHead,
    selectedChest,
    selectedGloves,
    selectedWaist,
    selectedLegs,
    handleListItemClick
    }) {

    let isSelected = selectedHead.id === item.id || selectedChest.id === item.id || selectedGloves.id === item.id || selectedWaist.id === item.id || selectedLegs.id === item.id

    let itemSkills = []
    item.skills.forEach(skill => {
        itemSkills.push(skill.skillName + " " + skill.level)
    })


    return (
        <>
            <Tooltip title={<h2 style={{ color: "yellow" }}>{itemSkills}</h2>} disableInteractive>
                <ListItemButton
                    sx={{ 
                        width: '100%', 
                        maxWidth: 360, 
                        backgroundColor: "#1F2023",
                        '&:hover': {
                            fontSize: '30px',
                            backgroundColor: "#1F2023",
                            color: 'black',
                            opacity: 0.5,
                        },
                    }}
                    selected={isSelected}
                    onClick={(event) => handleListItemClick(event, item.id, item.type, item.name, itemSkills)}
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
