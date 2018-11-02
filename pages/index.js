import React, { useState, useReducer } from 'react'

import TodoList from '../c/todolist'

export default () => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      console.log(state, action)
      switch (action.type) {
        case 'INPUT':
          return { ...state, input: action.value }
        case 'ADD':
          return {
            input: '',
            todos: [{ id: Date.now(), text: state.input }, ...state.todos],
          }
        case 'DEL':
          return { ...state, todos: state.todos.filter(x => x.id !== action.id) }
        default:
          return state
      }
    },
    { input: '', todos: [{ id: 0, text: 'Hello' }] },
  )

  const add = e => {
    console.log(e)
    dispatch({ type: 'ADD' })
    e.preventDefault()
    e.stopPropagation()
  }
  return (
    <div>
      <form onSubmit={add}>
        <input
          name="text"
          value={state.input}
          onChange={e => dispatch({ type: 'INPUT', value: e.target.value })}
        />
      </form>
      <TodoList todos={state.todos} dispatch={dispatch} />
    </div>
  )
}
