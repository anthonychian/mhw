import one from '../assets/1_slot.png'
import two from '../assets/2_slot.png'
import three from '../assets/3_slot.png'
import four from '../assets/4_slot.png'


export default function SlotIcon({ number }) {
  return (
    <>
        {number === 4 && <img src={one} alt='1_slot' />}
        {number === 3 && <img src={two} alt='2_slot' />}
        {number === 2 && <img src={three} alt='3_slot' />}
        {number === 1 && <img src={four} alt='4_slot' />}
    </>
  )
}
