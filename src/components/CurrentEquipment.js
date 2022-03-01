import React from 'react'
import ArmorIcon from './ArmorIcon'
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

export default function CurrentEquipment({
    selectedHead,
    selectedChest,
    selectedGloves,
    selectedWaist,
    selectedLegs,
    }) {

    const classes = useStyles();

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

    if (selectedHead.skills)
        setSkills(selectedHead.skills)
    if (selectedChest.skills)
        setSkills(selectedChest.skills)
    if (selectedGloves.skills)
        setSkills(selectedGloves.skills)
    if (selectedWaist.skills)
        setSkills(selectedWaist.skills)
    if (selectedLegs.skills)
        setSkills(selectedLegs.skills)


    return (
        <>
            <section style={{ 
                    margin: '2em'
            }}>
                <div>
                    <Tooltip
                        classes={classes}
                        title={
                            <>
                                {selectedHead.skills.map(skill => 
                                    <h2 key={skill} style={{ color: "yellow"}}>
                                        {`${skill.slice(0, -1)} x${skill.slice(-1)}`}
                                    </h2>
                                )}
                                {Object.values(selectedHead.slots).map((slot, idx) => 
                                    <SlotIcon key={idx} number={slot.rank} />
                                )}
                            </>
                        }
                        placement="right-start"
                        disableInteractive>
                        <ListItemButton
                            sx={{ 
                                width: '100%', 
                                maxWidth: 250, 
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

                            <ListItemText sx={{ color: 'white' }} primary={selectedHead.name} />
                            
                        </ListItemButton>
                    </Tooltip>

                    <Divider />

                    <Tooltip
                        classes={classes}
                        title={
                            <>
                                {selectedChest.skills.map(skill => 
                                    <h2 key={skill} style={{ color: "yellow"}}>
                                        {`${skill.slice(0, -1)} x${skill.slice(-1)}`}
                                    </h2>
                                )}
                                {Object.values(selectedChest.slots).map((slot, idx) => 
                                    <SlotIcon key={idx} number={slot.rank} />
                                )}
                            </>
                        }
                        placement="right-start"
                        disableInteractive>
                        <ListItemButton
                            sx={{ 
                                width: '100%', 
                                maxWidth: 250, 
                                backgroundColor: "#1F2023",
                                '&:hover': {
                                    backgroundColor: "#1F2023",
                                    color: 'black',
                                    opacity: 0.5,
                                },
                            }}
                        >
                            <ListItemIcon>
                                <ArmorIcon type="chest" />
                            </ListItemIcon>

                            <ListItemText sx={{ color: 'white' }} primary={selectedChest.name} />
                            
                        </ListItemButton>
                    </Tooltip>

                    <Divider />

                    <Tooltip
                        classes={classes}
                        title={
                            <>
                                {selectedGloves.skills.map(skill => 
                                    <h2 key={skill} style={{ color: "yellow"}}>
                                        {`${skill.slice(0, -1)} x${skill.slice(-1)}`}
                                    </h2>
                                )}
                                {Object.values(selectedGloves.slots).map((slot, idx) => 
                                    <SlotIcon key={idx} number={slot.rank} />
                                )}
                            </>
                        }
                        placement="right-start"
                        disableInteractive>
                        <ListItemButton
                            sx={{ 
                                width: '100%', 
                                maxWidth: 250, 
                                backgroundColor: "#1F2023",
                                '&:hover': {
                                    backgroundColor: "#1F2023",
                                    color: 'black',
                                    opacity: 0.5,
                                },
                            }}
                        >
                            <ListItemIcon>
                                <ArmorIcon type="gloves" />
                            </ListItemIcon>

                            <ListItemText sx={{ color: 'white' }} primary={selectedGloves.name} />
                            
                        </ListItemButton>
                    </Tooltip>

                    <Divider />

                    <Tooltip
                        classes={classes}
                        title={
                            <>
                                {selectedWaist.skills.map(skill => 
                                    <h2 key={skill} style={{ color: "yellow"}}>
                                        {`${skill.slice(0, -1)} x${skill.slice(-1)}`}
                                    </h2>
                                )}
                                {Object.values(selectedWaist.slots).map((slot, idx) => 
                                    <SlotIcon key={idx} number={slot.rank} />
                                )}
                            </>
                        }
                        placement="right-start"
                        disableInteractive>
                        <ListItemButton
                            sx={{ 
                                width: '100%', 
                                maxWidth: 250, 
                                backgroundColor: "#1F2023",
                                '&:hover': {
                                    backgroundColor: "#1F2023",
                                    color: 'black',
                                    opacity: 0.5,
                                },
                            }}
                        >
                            <ListItemIcon>
                                <ArmorIcon type="waist" />
                            </ListItemIcon>

                            <ListItemText sx={{ color: 'white' }} primary={selectedWaist.name} />
                            
                        </ListItemButton>
                    </Tooltip>

                    <Divider />

                    <Tooltip
                        classes={classes}
                        title={
                            <>
                                {selectedLegs.skills.map(skill => 
                                    <h2 key={skill} style={{ color: "yellow"}}>
                                        {`${skill.slice(0, -1)} x${skill.slice(-1)}`}
                                    </h2>
                                )}
                                {Object.values(selectedLegs.slots).map((slot, idx) => 
                                    <SlotIcon key={idx} number={slot.rank} />
                                )}
                            </>
                        }
                        placement="right-start"
                        disableInteractive>
                        <ListItemButton
                            sx={{ 
                                width: '100%', 
                                maxWidth: 250, 
                                backgroundColor: "#1F2023",
                                '&:hover': {
                                    backgroundColor: "#1F2023",
                                    color: 'black',
                                    opacity: 0.5,
                                },
                            }}
                        >
                            <ListItemIcon>
                                <ArmorIcon type="legs" />
                            </ListItemIcon>

                            <ListItemText sx={{ color: 'white' }} primary={selectedLegs.name} />
                            
                        </ListItemButton>
                    </Tooltip>

                    <Divider />

                </div>
            </section>

            <section style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '2em'
            }}>
                <div>
                    {Array.from(allSkills).map(skill => 
                    
                        <h3 key={skill} style={{ color: "white" }}>
                            {`${skill.slice(0, 1)} x${skill.slice(-1)}`}
                        </h3>
                        
                    )}
                </div>
            </section>
        </> 
    )
}
