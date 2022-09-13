
const ImageCard = ({ image }) => {
    const tags = image.tags.split(",")
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full h-[260px] object-cover" src={image.webformatURL} alt={image.type} />
            <div className="px-6 py-4">
                <h1 className="font-bold text-[#20C997] text-2xl">Photo by {image.user}</h1>
                <ul>
                    <li>
                        <strong>Views: </strong>
                        {image.views}
                    </li>
                    <li>
                        <strong>Downloads: </strong>
                        {image.downloads}
                    </li>
                    <li>
                        <strong>Likes: </strong>
                        {image.likes}
                    </li>
                </ul>
            </div>
            <div className="px-6 py-4">
                {tags.map((tag, index) => (
                    <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 mt-1 text-sm font-semibold text-gray-700 mr-2">
                        #{tag}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default ImageCard;