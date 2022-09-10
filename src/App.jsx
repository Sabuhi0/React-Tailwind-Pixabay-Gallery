import { useEffect, useState } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch"

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setISLoading] = useState(true);
  const [input, setInput] = useState('');
  const REACT_APP_PIXABAY_API_KEY="21115300-b484d5aa3a5ce17fbbdeef09b";
  
  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${REACT_APP_PIXABAY_API_KEY}&q=${input}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setISLoading(false);
      })
      .catch(error => console.log(error))
  }, [input]);
  

  return (
    <div className="container mx-auto">
      <ImageSearch searchText={(text) => setInput(text)}/>

      {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1>}
      
      { isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : !input ? null : <div className="grid grid-cols-3 gap-4"> {images.map(image => (
        <ImageCard key={image.id} image={image}/>
      ))}</div>}
    </div>
  )
}

export default App;
