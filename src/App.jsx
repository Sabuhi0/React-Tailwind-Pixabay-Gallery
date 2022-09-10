import { useEffect, useState } from "react";
import ImageCard from "./components/ImageCard";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setISLoading] = useState(true);
  const [term, setTerm] = useState("");
  
  useEffect(() => {
    const REACT_APP_PIXABAY_API_KEY="21115300-b484d5aa3a5ce17fbbdeef09b"
    fetch(`https://pixabay.com/api/?key=${REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setISLoading(false);
      })
      .catch(error => console.log(error))
  }, []);
  

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">
        {images.map(image => (
          <ImageCard key={image.id} image={image}/>
        ))}
      </div>
    </div>
  )
}

export default App;
