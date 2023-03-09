import { Person, PersonOutline } from 'react-ionicons';
import Icon from './icons';

export default function IconsList({ isSelected, capacity }) {
  const roomArray = [];

  for (let i = 0; i < capacity; i++) {
    roomArray.push(i);
  }

  return (
    <>
      {roomArray.map((bed, i) => {
        return (
          <Icon key={i} isSelected={isSelected}/>
        );
      })}
    </>
  );
}
