const TodoItem = ({sabor}) => {
    return (
        <>
        <ul class="list">
            <li>Maçã de {sabor} </li>
            <li>Banana de {sabor} </li>
            <li>Melancia de {sabor} </li>
            <li>Caju de {sabor} </li>
        </ul>
        </>
    );
}
 
export default TodoItem;