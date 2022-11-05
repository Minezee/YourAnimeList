const CardLoad = ({data}) => {
    let arrDummy = []

    for (let i = 0; i < data; i++) {
        arrDummy.push(' ')
    }

    return (
        <>
            {arrDummy.map((d, index) => (
                    <div 
                    className="min-w-[77px] h-[105px] mx-[6px] bg-dummy rounded-md"
                    key={`card-load-${index}`}></div>
                ))
            }
        </>
    )
}

export default CardLoad