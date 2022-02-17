import ArmorIcon from "./ArmorIcon";
import React from 'react'

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';

export default function CurrentEquipment({
    selectedHead,
    selectedChest,
    selectedGloves,
    selectedWaist,
    selectedLegs,
    }) {

    const allSkills =  new Map()
    
    function setSkills(arr) {
        arr.forEach(skill => {
            let name = skill.slice(0, -2);
            let level = parseInt(skill.slice(-1))
            if (allSkills.has(name)) {
                allSkills.set(name, allSkills.get(name) + level)
            } 
            else {
                allSkills.set(name, level)
            }
        })
    }

    setSkills(selectedHead.skills)
    setSkills(selectedChest.skills)
    setSkills(selectedGloves.skills)
    setSkills(selectedWaist.skills)
    setSkills(selectedLegs.skills)

    console.log(allSkills)

    return (
        <>
            <Tooltip title={<h2 style={{ color: "yellow" }}>{selectedHead.skills}</h2>} disableInteractive>
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
            </Tooltip>

            <Divider />
            <Tooltip title={<h2 style={{ color: "yellow" }}>{selectedChest.skills}</h2>} disableInteractive>
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
            </Tooltip>

            <Divider />
            <Tooltip title={<h2 style={{ color: "yellow" }}>{selectedGloves.skills}</h2>} disableInteractive>
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
            </Tooltip>

            <Divider />
            <Tooltip title={<h2 style={{ color: "yellow" }}>{selectedWaist.skills}</h2>} disableInteractive>
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
            </Tooltip>

            <Divider />
            <Tooltip title={<h2 style={{ color: "yellow" }}>{selectedLegs.skills}</h2>} disableInteractive>
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
            </Tooltip>
            
            <h2 style={{ color: "black" }}>{allSkills}</h2>
            {/* {Object.entries(allSkills).map(skill => 
               
                <h2 style={{ color: "black" }}>{skill}</h2>
                
            )} */}
            
        </> 
    )
}
