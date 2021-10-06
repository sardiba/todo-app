export const CreateTodo = ({ onCreate }) => {
  return (
    <form
      className="CreateTodo"
      onSubmit={(event) => {
        const newTodo = event.target.elements.newTodo.value; //event.target >> always the place where event take place!!
        onCreate(newTodo);
        event.preventDefault();
      }}
    >
      <input type="text" name="newTodo" />
      <input type="submit" />
    </form>
  );
};
