import { Todo } from '#types/todo'

interface TodoProps {
  todo: Todo
}

export default function TodoItem({ todo }: TodoProps) {
  return (
    <div>
      <span>{todo.id}. </span>
      <span>{todo.title}</span>
      <span>{todo.completed ? ' ✅' : ' ❌'}</span>
    </div>
  )
}