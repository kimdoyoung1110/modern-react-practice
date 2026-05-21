import { GetServerSideProps } from 'next'
import Title from '#components/common/title'
import TodoItem from '#components/todo/todo'
import { Todo } from '#types/todo'
import { HttpError } from '#utils/errors'

interface HomeProps {
  todos: Todo[]
}

export default function Home({ todos }: HomeProps) {
  return (
    <main>
      <Title title="Todo List" />
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
    signal: AbortSignal.timeout(30000), // 30초로 늘리기
  })

  if (!res.ok) {
    throw new HttpError(res.status, '목록을 불러오지 못했습니다.')
  }

  const todos: Todo[] = await res.json()

  return {
    props: { todos: todos.slice(0, 10) },
  }
}