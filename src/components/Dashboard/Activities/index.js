import styled from 'styled-components';
import { Subtitle } from '../Reservation';
import DaysButton from './DaysButton';
import useEvent from '../../../hooks/api/useEvent';

export default function ActivitiesLayout() {
  const events = useEvent.event;

  if (events) {
    return (
      <>
        <Subtitle>Primeiro, filtre pelo dia do evento: </Subtitle>
        <DaysContainer>
          <DaysButton/>
        </DaysContainer>
      </>
    );
  }

  return (
    <>
      <Subtitle>Carregando atividades </Subtitle>
    </>);
};

const DaysContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  margin-top:23px;
`;
