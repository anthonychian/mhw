import { EQUIP_ARMOR } from "./actions"

export const armors = (state = [], action) => {
    const { type, payload } = action

    switch (type) {
        case EQUIP_ARMOR: {
            const ordering = {
                "head": 1, 
                "chest": 2, 
                "gloves": 3, 
                "waist": 4, 
                "legs": 5
            };
            const armorType = payload.type
            return state.filter(armor => armor.type !== armorType)
                .concat(payload)
                .sort(function(a, b) { 
                    return ordering[a.type] - ordering[b.type]
                })
        }
        default: 
            return state
    }
}