export function PhotosNew({onCreate}) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onCreate(params, () => event.target.reset());
  };



  return (
    <div>
      <h1>New Photo</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" type="text" />
        </div>
        <div>
          Body: <input name="body" type="text" />
        </div>
        <div>
          image: <input name="image" type="text" />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}