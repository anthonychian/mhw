import axios from 'axios'
import React, { useState, useEffect} from 'react'

import ArmorSet from './ArmorSet'
import Navbar from './Navbar';

import Grid from '@mui/material/Grid';


export default function ArmorList() {

    const [armorList, setArmorList] = useState([])
  
    useEffect(() => {
        (async () => {
            const response = await axios.get('https://mhw-db.com/armor/sets')
            setArmorList(response.data)
        })()
    }, [])

    return (
        <>
            <Navbar />
            
            <Grid container spacing={2} sx={{ marginLeft: '2em', paddingTop: '5em'}}>
                {armorList.map(armor =>
                    <Grid item xs={3} key={armor.id}>
                        <ArmorSet 
                            armor={armor}
                            key={armor.id} />
                    </Grid>
                )}
            </Grid>
        </>

    )
}
