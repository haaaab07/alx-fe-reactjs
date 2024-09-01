// src/__tests__/TodoList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../TodoList';

test('renders TodoList component and initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
    expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
    expect(screen.getByText(/Build a Todo App/i)).toBeInTheDocument();
});

test('can add a new todo', () => {
    render(<TodoList />);
    fireEvent.change(screen.getByPlaceholderText(/Add a new todo/i), { target: { value: 'New Todo' } });
    fireEvent.click(screen.getByText(/Add Todo/i));
    expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
});

test('can toggle todo completion', () => {
    render(<TodoList />);
    const todoItem = screen.getByText(/Learn React/i);
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: line-through');
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: none');
});

test('can delete a todo', () => {
    render(<TodoList />);
    fireEvent.click(screen.getAllByText(/Delete/i)[0]);
    expect(screen.queryByText(/Learn React/i)).toBeNull();
});
