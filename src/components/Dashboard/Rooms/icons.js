import { Person, PersonOutline } from 'react-ionicons';

export default function Icon({ isSelected }) {
  if (isSelected) {
    return (
      <>
        <Person
          color={'#FF4791'}
        />
      </>
    );
  }
  return (
    <>
      <Person/>
    </>
  );
}
