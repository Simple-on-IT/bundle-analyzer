import styles from './ListElement.module.scss';

type ListElementProps = {
  checked: boolean; // значение чекбокса
  name: string; // Имя человека
  time: string; // промежуток выполнения задачи
}

export const ListElement = ({
  checked,
  name,
  time,
}: ListElementProps) => {
  return (
    <li className={styles.listElement}>
      <div className={styles.leftContainer}>
        <input type='checkbox' checked={checked} />
        <p>{name}</p>
      </div>
      <p>{time}</p>
    </li>
  )
};
