import {Task} from '@models/InterfaceDataListTodo';

export const filteredByNames = (
  tasks: Task[],
  inputTextUser: string,
  status: boolean,
) => {
  const trimmedInput = inputTextUser.trim();
  console.log('stata', status);

  if (trimmedInput.length > 0) {
    let searchFeature = tasks.filter(item => {
      console.log('com', item.completed === !status);
      item.taskName.toLowerCase().includes(inputTextUser.toLowerCase());
    });

    return searchFeature;
  } else {
    return tasks;
  }
};
