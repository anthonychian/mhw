import axios from 'axios'
import React, { useState, useEffect} from 'react'

import ArmorSet from './ArmorSet'
import Modal from './Modal'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import menuIcon from '../assets/zinogre.jpg'

import CurrentEquipment from './CurrentEquipment';

export default function ArmorList() {

    const [armorList, setArmorList] = useState([])
    const [selectedHead, setSelectedHead] = useState({})
    const [selectedChest, setSelectedChest] = useState({})
    const [selectedGloves, setSelectedGloves] = useState({})
    const [selectedWaist, setSelectedWaist] = useState({})
    const [selectedLegs, setSelectedLegs] = useState({})

    const handleListItemClick = (event, index, type, name, skills) => {
        switch(type) {
            case 'head':
              return setSelectedHead({id: index, name: name, skills: skills})
            case 'chest':
                return setSelectedChest({id: index, name: name, skills: skills})
            case 'gloves':
                return setSelectedGloves({id: index, name: name, skills: skills})
            case 'waist':
                return setSelectedWaist({id: index, name: name, skills: skills})
            case 'legs':
                return setSelectedLegs({id: index, name: name, skills: skills})
            default:
              return
          }
    };

  
    useEffect(() => {
        (async () => {
            const response = await axios.get('https://mhw-db.com/armor/sets')
            setArmorList(response.data)
        })()
    }, [])

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed">
                    <Toolbar>
                        <Avatar alt="Remy Sharp" src={menuIcon} style={{marginRight: '1em'}}/>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            MHW Armor Simulator
                        </Typography>
                        
                        <Modal name="Equipment">
                            <section style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center', 
                                margin: '2em'
                            }}>
                                <Box 
                                    sx={{ 
                                        width: '100%', 
                                        maxWidth: 360, 
                                        backgroundColor: "grey",
                                }}>
                                    <CurrentEquipment 
                                        selectedHead={selectedHead}
                                        selectedChest={selectedChest}
                                        selectedGloves={selectedGloves}
                                        selectedWaist={selectedWaist}
                                        selectedLegs={selectedLegs} />
                                </Box>
                            </section>
                        </Modal>
                    </Toolbar>
                </AppBar>
            </Box>
            
            <Grid container spacing={2}>
                {armorList.map(armor =>
                    <Grid item xs={3} key={armor.id}>
                        <ArmorSet 
                            armor={armor}
                            selectedHead={selectedHead}
                            selectedChest={selectedChest}
                            selectedGloves={selectedGloves}
                            selectedWaist={selectedWaist}
                            selectedLegs={selectedLegs}
                            handleListItemClick={handleListItemClick}
                            key={armor.id} />
                    </Grid>
                )}
            </Grid>
        </>

    )
}
