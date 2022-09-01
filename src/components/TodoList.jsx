import { useEffect, useState } from 'react';
import { List, Alert } from 'antd';
import TodoListCard from './TodoListCard';

export default function TodoList({ tasklist, setTaskList }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  // call the api and use setTasklist to fill in state...
  useEffect(() => {
    fetch('http://localhost:4005/tasks')
      .then(results => results.json())
      .then(tasks => {
        setTaskList(tasks);
        setLoading(false);
        setError('');
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      })
  }, [setTaskList, setLoading]);
  // if (!tasklist) {
  //   return <h2>No tasks to complete!</h2>
  // }
  return (
    <>
      {error && <Alert
        message="Error"
        description={error}
        type="error"
        showIcon
      />}
      <div className='task-list'>
        <List
          dataSource={tasklist}
          loading={loading}
          renderItem={(item) => (
            <TodoListCard 
            key={item.id}
             item={item} 
             setLoading={setLoading}
             setTaskList={setTaskList}
             setError={setError} 
             />
          )}
        />
      </div>
    </>
  )
}