import React from 'react'
import Modal from './Modal'
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import menuIcon from '../assets/safi.png'

import CurrentEquipment from './CurrentEquipment';

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <Avatar alt="menuIcon" src={menuIcon} style={{marginRight: '1em'}}/>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        MHW Armor Simulator
                    </Typography>
                    
                    <Modal name="Equipment">
                        <section style={{ 
                            // display: 'flex', 
                            // alignItems: 'center', 
                            // justifyContent: 'center', 
                            // margin: '2em'
                        }}>
                            <Box 
                                sx={{ 
                                    width: '100%', 
                                    // maxWidth: 360, 
                                    backgroundColor: "grey",
                            }}>
                                <CurrentEquipment />
                            </Box>
                        </section>
                    </Modal>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
