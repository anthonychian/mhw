import React from 'react'
import ArmorIcon from './ArmorIcon'
import SlotIcon from "./SlotIcon";

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';

import { makeStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux'

const useStyles = makeStyles({
    tooltip: {
      background: '#1a1c1a',
    },
  });

function CurrentEquipment({ armors }) {

    const classes = useStyles();

    const allSkills =  new Map()

    const allSlots = new Map()
    
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

    function setSlots(arr) {
        arr.forEach(slot => {
            if (allSlots.has(slot.rank)) {
                allSlots.set(slot.rank, allSlots.get(slot.rank) + 1)
            } 
            else {
                allSlots.set(slot.rank, 1)
            }
        })
    }
    console.log(allSlots)

    for (const property in armors) {
        const item = armors[property]
        if (item.skills) {
            setSkills(item.skills)
        }
        if (item.slots) {
            setSlots(item.slots)
        }
    }

    return (
        <>
            <section style={{ margin: '2em' }}>
                {Object.values(armors).map((item, idx) => 
                    <div key={idx}>
                        {item.skills && <Tooltip
                            classes={classes}
                            title={
                                <>
                                    {item.skills.map(skill => 
                                        <h2 key={skill} style={{ color: "yellow"}}>
                                            {`${skill.slice(0, -1)} x${skill.slice(-1)}`}
                                        </h2>
                                    )}
                                    {Object.values(item.slots).map((slot, idx) => 
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
                            }}>

                                <ListItemIcon>
                                    <ArmorIcon type={item.type} />
                                </ListItemIcon>

                                <ListItemText sx={{ color: 'white' }} primary={item.name} />
                                
                            </ListItemButton>
                        </Tooltip>}

                        <Divider />
                    </div>
                )}
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
                            {`${skill.slice(0, 1)} x ${skill.slice(-1)}`}
                        </h3>
                        
                    )}
                </div>
                <div style={{margin: '2em'}}>
                    {Array.from(allSlots).map(slot => 
                        <div key={slot}>
                            <SlotIcon number={parseInt(slot.slice(0, 1))} />
                            <span style={{ color: "white" }}>
                                {` x ${slot.slice(-1)}`}
                            </span>
                        </div>
                    )}
                </div>
            </section>
        </> 
    )
}

const mapStateToProps = state => ({
    armors: state.armors,
})

export default connect(mapStateToProps)(CurrentEquipment)
