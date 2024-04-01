export default function AddCandidate(params) {
  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Add Candidate</h2>
      <form onSubmit={onFormSubmit}>
        <div className="mb-4">
          <input
            className="rounded rounded px-12 py-2"
            autoFocus
            type="text"
            id="name"
            placeholder="Name"
          />
        </div>

        <div className="mb-4">
          <input
            className="rounded px-12 py-2"
            type="text"
            id="slogan"
            placeholder="Slogan"
          />
        </div>
        <button className="px-12 py-2">Add</button>
      </form>
    </div>
  );
}
