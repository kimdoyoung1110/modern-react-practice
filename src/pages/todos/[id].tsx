import { GetServerSideProps } from 'next'
import Title from '#components/common/title'
import TodoItem from '#components/todo/todo'
import { Todo } from '#types/todo'
import { HttpError } from '#utils/errors'

interface TodoDetailProps {
  todo: Todo
}

export default function TodoDetail({ todo }: TodoDetailProps) {
  return (
    <main>
      <Title title={`Todo #${todo.id}`} />
      <TodoItem todo={todo} />
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.id

  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)

  if (!res.ok) {
    throw new HttpError(res.status, '해당 todo를 찾을 수 없습니다.')
  }

  const todo: Todo = await res.json()

  return {
    props: { todo },
  }
}