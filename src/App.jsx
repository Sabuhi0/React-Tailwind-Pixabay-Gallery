import { useEffect, useState } from "react";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setISLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo`)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
  })
  

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src="https://source.unsplash.com/random" alt="" />
      <div className="px-6 py-4">
        <h1 className="font-bold text-[#20C997] text-2xl">Photo by Sabuhi Gasimov</h1>
        <ul>
          <li>
            <strong>Views: </strong>
            4000
          </li>
          <li>
            <strong>Downloads: </strong>
            1000
          </li>
          <li>
            <strong>Likes: </strong>
            2500
          </li>
        </ul>
      </div>
      <div className="px-6 py-4 flex gap-2">
        <span className="bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-600">#tag1</span>
        <span className="bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-600">#tag2</span>
        <span className="bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-600">#tag3</span>
      </div>
    </div>
  )
}

export default App;
