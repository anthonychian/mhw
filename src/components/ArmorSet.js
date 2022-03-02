import React from 'react'
import ArmorItem from "./ArmorItem"

import Box from '@mui/material/Box';
import List from '@mui/material/List';

export default function ArmorSet({ armor }) {

    return (
        <Box 
            sx={{ 
                width: '100%', 
                maxWidth: 360, 
                backgroundColor: "grey",
            }}>
            <h2 style={{color: 'white'}}>{armor.name}</h2>
            <List component="nav" aria-label="main mailbox folders">
                {armor.pieces.map(item =>
                    <ArmorItem 
                        item={item}
                        key={item.id} />
                )}
            </List>
        </Box>
    )
}
