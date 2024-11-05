import { ListElement } from '@/shared/ui/ListElement/ListElement';
import { getTasks } from '../model/lib/getTasks';
import { Virtuoso } from 'react-virtuoso';
const tasks = getTasks();

export const MainPage = () => {
  return (
    <Virtuoso
      data={tasks}
      style={{ height: '600px' }}
      totalCount={tasks.length}
      itemContent={(_, task) => (
        <ListElement
          key={task.id}
          checked={task.checked}
          name={task.name}
          time={task.time}
        />
      )}
    />
  )
}