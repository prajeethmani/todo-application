return (
  <div className="container">
    <h1>Todo Application</h1>

    <TodoForm
      todos ={todos}
      setTodos ={setTodos}/>

    <TodoList
      todos = {todos}
      setTodos={setTodos}/>
  </div>
);

export default App;