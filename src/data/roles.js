import cloveImage from '../assets/agents/clove.webp'
import cypherImage from '../assets/agents/cypher.webp'
import fadeImage from '../assets/agents/fade.webp'
import neonImage from '../assets/agents/neon.webp'
import omenImage from '../assets/agents/omen.webp'
import phoenixImage from '../assets/agents/phoenix.webp'
import sovaImage from '../assets/agents/sova.webp'
import vyseImage from '../assets/agents/vyse.webp'

export const roleOptions = [
  {
    key: 'Duelist',
    label: 'Duelist',
    agents: [
      { name: 'Neon', image: neonImage },
      { name: 'Phoenix', image: phoenixImage },
    ],
  },
  {
    key: 'Initiator',
    label: 'Initiator',
    agents: [
      { name: 'Sova', image: sovaImage },
      { name: 'Fade', image: fadeImage },
    ],
  },
  {
    key: 'Controller',
    label: 'Smokes',
    agents: [
      { name: 'Clove', image: cloveImage },
      { name: 'Omen', image: omenImage },
    ],
  },
  {
    key: 'Sentinel',
    label: 'Sentinel',
    agents: [
      { name: 'Cypher', image: cypherImage },
      { name: 'Vyse', image: vyseImage },
    ],
  },
]
