export function PhotosIndex({photos}) {
  return (
    <div>
      <h1>All photos</h1>
      {photos.map((photo) => (
        <div key={photo.id}>
          <h2> Title: {photo.title}</h2>
          <p> Body: {photo.body}</p>
          <img src={photo.image}/>
          <button> Details </button>
        </div>
      ))}
    </div>
  );
}