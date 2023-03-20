import useAsync from '../useAsync';
import * as activityApi from '../../services/activitiesApi';

export default async function useActivity(token) {
  const {
    data: activity,
    loading: activityLoading,
    error: activityError,
    act: getActivitiesByDate
  } = useAsync(() => activityApi.getActivitiesByDate(token));
  
  return {
    activity,
    activityLoading,
    activityError,
    getActivitiesByDate,
  };
}
