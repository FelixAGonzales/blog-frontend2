export function PhotosShow(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target)
    props.onUpdate(params, props.photo.id, () => event.target.reset())
  }

  const handleDelete = () => {
    props.onDestroy(props.photo.id)
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h1>Photo information</h1>
        <p>Title: {props.photo.title}</p>
        <p>Body: {props.photo.body}</p>
        <img src={props.photo.image}/>
        <form onSubmit={handleSubmit}>
          <div>
            Title: <input defaultValue={props.photo.title} name="title" type="text"/>
          </div>
          <div>
            Body: <input defaultValue={props.photo.body} name="body" type="text"/>
          </div>
          <div>
            Image: <input defaultValue={props.photo.image} name="image" type="text"/>
          </div>
          <button type="submit">Update Photo</button>
        </form>
        <button onClick={handleDelete}>Delete Photo</button>

      </div>
    </div>
  );
}