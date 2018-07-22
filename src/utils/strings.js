import moment from 'moment';

export const getExperienceTime = () => {
  const firstDateOfWork = '20170201';
  const experienceTime = moment(firstDateOfWork, 'YYYYMMDD').fromNow(true);
  return experienceTime;
};
