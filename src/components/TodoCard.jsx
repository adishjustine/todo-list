import React from 'react'

export default function TodoCard(props) {
    const { children, handleDeleteTodo, index, handleEditTodo } = props
    return (
        <li className='todoItem' >
            {children}
            <div className='actionsContainer'>
                <button onClick={() => handleEditTodo(index)}>
                    <i className="fa-solid fa-pen-to-square fa-2x"></i> {/* Larger edit icon */}
                </button>
                <button onClick={() => handleDeleteTodo(index)}>
                    <i className="fa-regular fa-trash-can fa-2x"></i> {/* Larger delete icon */}
                </button>
            </div>
        </li>
    )
}
