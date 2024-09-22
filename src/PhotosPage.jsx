import { PhotosIndex } from "./PhotosIndex";


export function PhotosPage() {
  const photos = [
    {id: 1, title: "First", body: "test1", url: "https://via.placeholder.com/150", width: 150, height: 150},
    {id: 2, title: "Second", body: "test2", url: "https://via.placeholder.com/300", width: 300, height: 300},
  ];
    

  
  return (
    <main>
      <h1>Welcome to React!</h1>
      <PhotosIndex photos={photos}/>
    </main>
  )
}