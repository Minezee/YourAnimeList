import CardLoad from "./CardLoad"

const SlideLoad = () => {
    let arrDummy = []

    for (let i = 0; i < 25; i++) {
        arrDummy.push(' ')
    }

    return (
        <>
            {arrDummy.map((d, index) => (
                    <div 
                    className="min-w-[21.7%] md:min-w-[11.2%] h-full mx-[6px] md:mx-[8px]"
                    key={`card-load-${index}`}>
                        <CardLoad />
                    </div>
                ))
            }
        </>
    )
}

export default SlideLoad