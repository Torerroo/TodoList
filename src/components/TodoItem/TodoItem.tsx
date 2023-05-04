import { FC } from 'react'
import { motion } from 'framer-motion'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { Todo } from '../../models/TodosTypes'
import { changeTodoStatus, deleteTodo } from '../../redux/slices/todosSlice'
import './TodoItem.scss'

interface TodoItemProps extends Todo {
  index: number
}

export const TodoItem:FC<TodoItemProps> = ({
  id, title, status, index,
}) => {
  const dispatch = useAppDispatch()

  const statusHandler = () => {
    dispatch(changeTodoStatus(id))
  }
  const deleteHandler = () => {
    dispatch(deleteTodo(id))
  }

  return (
    <motion.li
      className="todoitem"
      initial={{ opacity: 0, x: -1200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <span className={status ? 'text__line-through' : ''}>
        {index + 1}
        .
        {' '}
        {title}
      </span>
      <span>
        <button type="button" className="btn btn-warning">Detail</button>
        <button onClick={statusHandler} className={status ? 'btn btn-success' : 'btn btn-primary'} type="button">{status ? 'Undone' : 'Done'}</button>
        <button type="button" onClick={deleteHandler} className="btn btn-danger">Delete</button>
      </span>
    </motion.li>
  )
}
