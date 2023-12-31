import GalleryCard from "../comm/GalleryCard";

const GalleryItem = (props) => {
    console.log(props.item);

    const tags = props.item.map((i)=>
        <GalleryCard
            key={i.galContentId} 
            imgsrc={i.galWebImageUrl.replace('http','https')}    
            title={i.galTitle} 
            content={i.galPhotographyLocation} 
            sptag={i.galSearchKeyword.split(", ")}
        />
    );

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-38">
            {tags}
        </div>
    )
}

export default GalleryItem
