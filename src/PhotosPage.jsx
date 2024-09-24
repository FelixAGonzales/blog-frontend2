import axios from "axios";
import { useState, useEffect } from "react";

import { PhotosIndex } from "./PhotosIndex";
import { PhotosNew } from "./PhotosNew";
import { Modal } from "./Modal";
import { PhotosShow } from "./PhotosShow";

export function PhotosPage() {
    
  const [photos, setPhotos] = useState ([]);
  const [isPhotosShowVisible, setIsPhotosShowVisible] = useState(false);
  const [currentPhoto, setCurrentPhotos] = useState({});

  // const []

  const handleIndex = () => {
    axios.get("http://localhost:3000/posts.json").then(response => {
      setPhotos(response.data);
    });
  };

  const handleCreate = (params, afterCreate) => {
    axios.post("http://localhost:3000/posts.json", params).then(response => {
      setPhotos([...photos, response.data]);
      afterCreate;
    });
  };

  const handleShow = (photo) => {
    setIsPhotosShowVisible(true);
    setCurrentPhotos(photo);
  }

  const handleClose = () => {
    setIsPhotosShowVisible(false);
  }

  const handleUpdate = (params, id, afterCreate) => {
    axios.patch(`http://localhost:3000/posts/${id}.json`, params).then(response => {
      afterCreate();
      setPhotos(photos.map(photo => {
        if (photo.id === id) {
          return response.data
        } else {
          return photo
        }
      }))
    })
  }

  const handleDestroy = (id) => {
    axios.delete(`http://localhost:3000/posts/${id}.json`).then(response => {
      console.log(response.data);
      setPhotos(photos.filter(photo => photo.id !== id))
      handleClose();
    })

  }
  

  useEffect(handleIndex, []);
  
  return (
    <main>
      <h1>Welcome to React!</h1>
      <PhotosNew onCreate={handleCreate}/>
      <PhotosIndex photos={photos} onShow={handleShow}/>
      <Modal show={isPhotosShowVisible} onClose={handleClose}>
        <PhotosShow 
        photo={currentPhoto} 
        onUpdate={handleUpdate}
        onDestroy={handleDestroy}
        />

      </Modal>
    </main>
  )
}