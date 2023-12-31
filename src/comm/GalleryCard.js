const GalleryCard = (props) => {
    const sptags = props.sptag.map((item, idx)=>
        <span key={`sp${idx}`} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #{item}
        </span>
    )
    
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <img className="w-full h-64 object-cover" src={props.imgsrc} alt={props.title} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{props.title}</div>
                    <p className="text-gray-700 text-base">
                        {props.content}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    {sptags}
                </div>
        </div>
    )
}

export default GalleryCard
