export const EQUIP_ARMOR = 'EQUIP_ARMOR'
export const equipArmor = text => ({
    type: EQUIP_ARMOR,
    payload: { text },
})