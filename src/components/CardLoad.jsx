const CardLoad = ({data}) => {
    let arrDummy = []

    for (let i = 0; i < data; i++) {
        arrDummy.push(' ')
    }

    return (
        <>
            {arrDummy.map((d, index) => (
                    <div 
                    className="min-w-[77px] md:min-w-[124px] h-[105px] md:h-[175px] mx-[6px] md:mx-[8px] bg-dummy"
                    key={`card-load-${index}`}></div>
                ))
            }
        </>
    )
}

export default CardLoad