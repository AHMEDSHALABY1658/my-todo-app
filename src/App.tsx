import React, { useState } from 'react';
import { Todo } from './types/todo';
import TodoItem from './components/TodoItem';

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [task, setTask] = useState('');

    const addTodo = () => {
        if (task.trim() === '') return;
        const newTodo: Todo = {
            id: Date.now(),
            text: task,
        }; 
        setTodos([...todos, newTodo]);
        setTask('');
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', background: '#f4f4f4', borderRadius: '8px' }}>
            <h1 style={{ textAlign: 'center' }}>To-Do List</h1>
            <div style={{ display: 'flex', marginBottom: '20px' }}>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Add a new task..."
                    style={{ flex: 1, padding: '8px' }}
                />
                <button onClick={addTodo} style={{ marginLeft: '8px', padding: '8px' }}>Add</button>
            </div>
            <ul style={{ listStyle: 'none', padding: 0 }}>
            {todos.map(todo => (
    <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
))}
            </ul>
        </div>
    );
}

export default App;
