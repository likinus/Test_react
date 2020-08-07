import React, { useContext } from 'react'
import Proptypes from 'prop-types'
import Context from '../context'

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        aligntItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    }
}

function TodoItem({ todo, index, onChange }) {
    const { removeTodo } = useContext(Context)
    const classes = []

    if (todo.completed) {
        classes.push('done')
    }
    return (
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input 
                checked={todo.completed}
                type="checkbox" 
                style={styles.input} 
                onChange={() => onChange(todo.id)}></input>
                <strong>{index + 1}</strong>
                &nbsp;
                {todo.title}
            </span>

            <button className='rm' onClick={() => removeTodo(todo.id)}>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: Proptypes.object.isRequired,
    index: Proptypes.number,
    onChange: Proptypes.func.isRequired
}

export default TodoItem