import axios from 'axios'
import React, { useState, useEffect} from 'react'

import ArmorSet from './ArmorSet'
import Modal from './Modal'
import Grid from '@mui/material/Grid';
import CurrentEquipment from './CurrentEquipment';

export default function ArmorList() {

    const [armorList, setArmorList] = useState([])
    const [selectedHead, setSelectedHead] = useState({})
    const [selectedChest, setSelectedChest] = useState({})
    const [selectedGloves, setSelectedGloves] = useState({})
    const [selectedWaist, setSelectedWaist] = useState({})
    const [selectedLegs, setSelectedLegs] = useState({})

    const handleListItemClick = (event, index, type, name) => {
        switch(type) {
            case 'head':
              return setSelectedHead({id: index, name: name})
            case 'chest':
                return setSelectedChest({id: index, name: name})
            case 'gloves':
                return setSelectedGloves({id: index, name: name})
            case 'waist':
                return setSelectedWaist({id: index, name: name})
            case 'legs':
                return setSelectedLegs({id: index, name: name})
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
            <Modal name="Equipment">
                <CurrentEquipment 
                    selectedHead={selectedHead}
                    selectedChest={selectedChest}
                    selectedGloves={selectedGloves}
                    selectedWaist={selectedWaist}
                    selectedLegs={selectedLegs} />
            </Modal>
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
