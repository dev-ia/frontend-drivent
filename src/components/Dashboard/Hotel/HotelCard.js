import styled from 'styled-components';

export async function HotelCard() {
  return (
    <HotelStyle>

    </HotelStyle>
  );
}

export const HotelStyle = styled.button`
  position: relative;
  all: unset;
  width: 145px;
  height: 145px;
  //background-color: ${(props) => (props.color ? 'yellow' : 'black')};
  border: 1px solid #cecece;
  border-radius: 20px;
  align-items: center;
  text-align: center;
  cursor: pointer;
  margin-bottom: 52px;
  &.clicked {
    background-color: #FFEED2;
    color: white;
  }
  &.notClicked {
    background-color: ##EBEBEB;
    color: #343434;
    ;
  }
`;
