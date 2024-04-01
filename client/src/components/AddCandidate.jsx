export default function AddCandidate(params) {
  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>Add Candidate</h2>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="slogan">Slogan:</label>
        <input type="text" name="slogan" id="slogan" />
        <button>Add</button>
      </form>
    </div>
  );
}
