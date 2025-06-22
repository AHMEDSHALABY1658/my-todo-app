import React from 'react';
import { Todo } from '../types/todo';

type TodoItemProps = {
    todo: Todo;
    deleteTodo: (id: number) => void;
};
function TodoItem({ todo, deleteTodo }: TodoItemProps) {
    return (
        <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span>{todo.text}</span>
            <button
                onClick={() => deleteTodo(todo.id)}
                style={{ background: 'red', color: 'white', border: 'none', padding: '4px 8px' }}
            >
                Delete
            </button>
        </li>
    );
}

export default TodoItem;
