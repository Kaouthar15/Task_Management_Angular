import { NewTaskData, Task } from "./task/task.model";

class TasksService {
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u1',
      title: 'Master SpringBoot',
      summary:
        'Learn all the basic and advanced features of SpringBoot & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't3',
      userId: 'u2',
      title: 'Master JavaScript',
      summary:
        'Learn all the basic and advanced features of Javasprict & how to apply them.',
      dueDate: '2023-01-09',
    },
    {
      id: 't4',
      userId: 'u3',
      title: 'Master JavaScript',
      summary:
        'Learn all the basic and advanced features of Javasprict & how to apply them.',
      dueDate: '2023-01-09',
    },
    {
      id: 't5',
      userId: 'u4',
      title: 'Master JavaScript',
      summary:
        'Learn all the basic and advanced features of Javasprict & how to apply them.',
      dueDate: '2023-01-09',
    },
    {
      id: 't6',
      userId: 'u5',
      title: 'Master JavaScript',
      summary:
        'Learn all the basic and advanced features of Javasprict & how to apply them.',
      dueDate: '2023-01-09',
    },
    {
      id: 't7',
      userId: 'u6',
      title: 'Master JavaScript',
      summary:
        'Learn all the basic and advanced features of Javasprict & how to apply them.',
      dueDate: '2023-01-09',
    },
  ];
  getUserTasks(userId : string){
    return this.tasks.filter((e)=>e.userId === userId);
  }

  addTask(taskData : NewTaskData,userId : string){
    this.tasks.push({
        id : new Date().getTime().toString(),
        userId : userId,
        title : taskData.title,
        summary : taskData.summary,
        dueDate : taskData.dueData
      })
  }

  removeTask(id:string){
    this.tasks = this.tasks.filter((e)=>id !== e.id);
  }

  editTask(taskData : Task){ 
    const index = this.tasks.findIndex((e)=>e.id === taskData.id);
    if (index !== -1){
      this.tasks[index] = taskData;
    }
  }
}
