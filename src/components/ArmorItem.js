import ArmorIcon from "./ArmorIcon";
import React from 'react'

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

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

    return (
        <>
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
                onClick={(event) => handleListItemClick(event, item.id, item.type)}
            >
                <ListItemIcon>
                    <ArmorIcon type={item.type} />
                </ListItemIcon>

                <ListItemText sx={{ color: 'white' }}primary={item.name} />
                
            </ListItemButton>

            <Divider />
        </>
    )
}
