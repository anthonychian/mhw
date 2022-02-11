import ArmorIcon from "./ArmorIcon";
import React from 'react'

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

export default function CurrentEquipment({
    selectedHead,
    selectedChest,
    selectedGloves,
    selectedWaist,
    selectedLegs,
    }) {
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
            >
                <ListItemIcon>
                    <ArmorIcon type="head" />
                </ListItemIcon>

                <ListItemText sx={{ color: 'white' }}primary={selectedHead.name} />
                
            </ListItemButton>

            <Divider />
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
            >
                <ListItemIcon>
                    <ArmorIcon type="head" />
                </ListItemIcon>

                <ListItemText sx={{ color: 'white' }}primary={selectedChest.name} />
                
            </ListItemButton>

            <Divider />
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
            >
                <ListItemIcon>
                    <ArmorIcon type="head" />
                </ListItemIcon>

                <ListItemText sx={{ color: 'white' }}primary={selectedGloves.name} />
                
            </ListItemButton>

            <Divider />
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
            >
                <ListItemIcon>
                    <ArmorIcon type="head" />
                </ListItemIcon>

                <ListItemText sx={{ color: 'white' }}primary={selectedWaist.name} />
                
            </ListItemButton>

            <Divider />
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
            >
                <ListItemIcon>
                    <ArmorIcon type="head" />
                </ListItemIcon>

                <ListItemText sx={{ color: 'white' }}primary={selectedLegs.name} />
                
            </ListItemButton>

            <Divider />
        </>
    )
}
