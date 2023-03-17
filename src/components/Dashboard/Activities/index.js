import styled from 'styled-components';
import { Subtitle } from '../Reservation';
import DaysButton from './DaysButton';
import useEvent from '../../../hooks/api/useEvent';
import ActivitiesTable from './ActivitiesTable';

export default function ActivitiesLayout() {
  return (
    <>
      <Subtitle>Primeiro, filtre pelo dia do evento: </Subtitle>
      <DaysContainer>
        <DaysButton/>
      </DaysContainer>
      <AcitivitiesData>
        <ActivitiesTable/>
      </AcitivitiesData>

    </>
  );

  // return (
  //   <>
  //     <Subtitle>Carregando atividades </Subtitle>
  //   </>);
};

const DaysContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top:23px;
  justify-content:space-between;
`;

const AcitivitiesData = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  margin-top:60px;
`;
