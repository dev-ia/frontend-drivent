import styled from 'styled-components';
import { Subtitle } from '../Reservation';
import DaysButton from './DaysButton';
import ActivitiesTable from './ActivitiesTable';
import useToken from '../../../hooks/useToken';
import { useState, useEffect } from 'react';
import { getActivitiesByDate } from '../../../services/activitiesApi';
 
export default function ActivitiesLayout({ date }) {
  const token = useToken();
  const [activities, setActivities] =  useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  async function getActivities() {
    try {
      const activities = await getActivitiesByDate(token, date);
      setActivities(activities);
    } catch (error) {
      console.log(error.response.data);
    };
  }
  
  useEffect(() => {
    getActivities();
  }, [date]);

  function handleDateSelection(evt, activity) {
    evt.preventDefault();
    setSelectedDate(activity);
  }

  return (
    <>
      <Subtitle>Primeiro, filtre pelo dia do evento: </Subtitle>
      <DaysContainer>
        {activities.map((activity) => {
          return (
            <DaysButton
              key={activity.id}
              day={activity.data}
              onClick={(evt) => handleDateSelection(evt, activity)}
            />
          );
        })}
      </DaysContainer>
      <ActivitiesData>
        <ActivitiesTable/>
      </ActivitiesData>
    </>
  );
}

const DaysContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top:23px;
  justify-content:space-between;
`;

const ActivitiesData = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  margin-top:60px;
`;
