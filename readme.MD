# useInput
*React hook to simplify the usage of arrays*

```javascript
@param {*} initialValue - the initial state, unlike with classes, the state doesn’t have to be an object.
@return {value, setValue} useState
@return {add} (action => setValue(value => [...value, action] ))
@return {clear} a Function that empties the array () => []
@return {removeId} a Function that removes item from array by Id
@return {removeIndex} => ( removes item by index

@example
import useArray from "@marcusfrancis/usearray";

const Example = () => {
  const todos = useArray([]);
  const [newTodo, updateNewTodo, resetNewTodo] = useInput("");

  const handleSubmit = event => {
    event.preventDefault();
    todos.add(newTodo);
    resetNewTodo();
  };

  return (
    <>
      <form>
        <input
          value={newTodo}
          onChange={updateNewTodo} />
        <button onClick={handleSubmit}> Add </button>
      </form>
      <ul>
        {todos.value.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => todos.removeIndex(index)}> Delete </button>
          </li>
        ))}
      </ul>
    </>
  );
};


```
