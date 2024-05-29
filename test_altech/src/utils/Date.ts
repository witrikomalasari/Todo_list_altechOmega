import dayjs from 'dayjs';

export const formatDate = dateFormat => {
  let format = 'ddd, DD-MM-YYYY';
  const formatdate = dayjs(dateFormat).format(format);
  // console.log('iiii', formatdate);
  return formatdate;
};
