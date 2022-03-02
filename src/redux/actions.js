export const EQUIP_ARMOR = 'EQUIP_ARMOR'
export const equipArmor = (id, type, name, skills, slots) => ({
    type: EQUIP_ARMOR,
    payload: { id, type, name, skills, slots },
})