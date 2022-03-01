import { EQUIP_ARMOR } from "./actions"

export const armors = (state = [], action) => {
    const { type, payload } = action

    switch (type) {
        case EQUIP_ARMOR: {
            const { text } = payload
            const newArmor = {
                text,
            }
            return state.concat(newArmor)
        }
        default: 
            return state
    }
}