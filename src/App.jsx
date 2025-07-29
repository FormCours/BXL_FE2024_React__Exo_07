import './App.css';
import TodoApp from './features/todo-app/todo-app';
import Header from './layouts/header/header';

function App() {

  return (
    <>
      <Header />
      <main>
        <h1>Exo 04 - Todo List</h1>
        <TodoApp />
      </main>
    </>
  );
}

export default App;
