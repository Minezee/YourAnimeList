import CardLoad from "./CardLoad"

const PageLoad = () => {
    let arrDummy = []

    for (let i = 0; i < 25; i++) {
        arrDummy.push(' ')
    }

    return (
        <>
            {arrDummy.map((d, index) => (
                    <div 
                    className="w-[21.7%] md:w-[15%] h-[45vh] min-h-[20%] mx-[6px] mb-2 md:mx-6 md:mb-6 bg-dummy"
                    key={`card-load-${index}`}></div>
                ))
            }
        </>
    )
}

export default PageLoad