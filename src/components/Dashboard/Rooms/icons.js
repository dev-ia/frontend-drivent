import styled from 'styled-components';
import UserFilled from '../../../assets/SVGs/UserFilled.svg';
import UserOutline from '../../../assets/SVGs/UserOutline.svg';
import { Person, PersonOutline } from 'react-ionicons';

export default function Icon({ setIsFilled }) {
  return (
    <>
      <Person />
      <PersonOutline />
      <PersonOutline />
    </>
  );
}
