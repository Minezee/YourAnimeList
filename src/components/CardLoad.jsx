const CardLoad = ({data}) => {
    let arrDummy = []

    for (let i = 0; i < data; i++) {
        arrDummy.push(' ')
    }

    return (
        <>
            {arrDummy.map((d, index) => (
                    <div 
                    className="min-w-[21.7%] md:min-w-[11.2%] h-full mx-[6px] md:mx-[8px] bg-dummy"
                    key={`card-load-${index}`}></div>
                ))
            }
        </>
    )
}

export default CardLoad