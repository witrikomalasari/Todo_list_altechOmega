import {Task} from '@models/InterfaceDataListTodo';

export const filteredByNames = (tasks: Task[], inputTextUser: string) => {
  // console.log('tas', tasks);
  // console.log('dat', inputTextUser);
  let searchFeature = tasks.filter(item => {
    // console.log('taskname', item.taskName.toLowerCase());
    // console.log('inputuser', inputTextUser.toLowerCase());
    item.taskName.toLowerCase().includes(inputTextUser.toLowerCase());
  });

  return searchFeature;
};

// export const filterByStatus = () => {
//   let searchByUncompleted;
// };

// includes --> checks if the name contains the searchUserInput as a substring
// filter --> method returns a new array with dataAPI that match the search criteria
// dataAPI --> bentuk nya array of object
