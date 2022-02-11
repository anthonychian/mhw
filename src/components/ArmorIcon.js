import head from '../assets/Helmet_Icon_Dark_Red.png'
import chest from '../assets/Chest_Icon_Dark_Red.png'
import gloves from '../assets/Arm_Icon_Dark_Red.png'
import waist from '../assets/Waist_Icon_Dark_Red.png'
import legs from '../assets/Leg_Icon_Dark_Red.png'

export default function ArmorIcon({ type }) {
  return (
    <>
        {type === 'head' && <img src={head} alt='head' />}
        {type === 'chest' && <img src={chest} alt='chest' />}
        {type === 'gloves' && <img src={gloves} alt='gloves' />}
        {type === 'waist' && <img src={waist} alt='waist' />}
        {type === 'legs' && <img src={legs} alt='legs' />}
    </>
  )
}
