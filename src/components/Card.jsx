const Card = ({data, currentSlide}) => (
    <div className="relative min-w-[77px] h-full mx-[6px]"
    style={{ transform: `translateX(${-356 * (currentSlide - 1)}px)` }}>
        <img
            src={data.images.jpg.large_image_url}
            className="h-full w-full"
            alt="data poster" />
        <div className="absolute w-full h-1/2 bg-gradient-to-t from-dark bottom-0">
            <div className="absolute bottom-0 left-0 m-1">
                <h3 className="text-[8px] text-white font-bold w-full ">
                    {data.title.length > 40 ? 
                    (data.title.slice(0,40) + "...")
                    :
                    (data.title)}
                    </h3>
                <p className="text-[6px] text-white w-full ">{data.score}</p>
            </div>
        </div>
    </div>
)

export default Card