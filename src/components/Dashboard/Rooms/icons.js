import { Person, PersonOutline } from 'react-ionicons';

export default function Icon({ isActive }) {
  if (isActive) {
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
      <PersonOutline/>
    </>
  );
}
