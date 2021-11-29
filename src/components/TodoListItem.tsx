import React from "react";

interface TodoListItemProps {
    todo: Todo;
    toggleComplete: ToggleComplete;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({todo, toggleComplete}) => {
    
    return (
        <li></li>
    )
}