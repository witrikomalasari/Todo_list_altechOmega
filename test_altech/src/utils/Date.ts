import dayjs from 'dayjs';

export const formatDate = (dateFormat: Date) => {
  let format = 'DDMMYYYY';
  const formatdate = dayjs(dateFormat).format(format);
  // console.log('iiii', formatdate);
  return formatdate;
};
