import { Error, Card, PageLoad } from "../components";

import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'


const Page = ({ data, isFetching, setPage, page }) => {
    const hasNextPage = data?.pagination?.has_next_page;
    const totalPage = data?.pagination?.last_visible_page;
    const pageArr = []

    if (page < 4) {
        if(totalPage < 7){
            for (let i = 1; i <= totalPage; i++){
                pageArr.push(i)
            }
        }else{
            for (let i = 1; i < 8; i++) {
                pageArr.push(i)
            }
        }
    } else {
        if(page + 4 >= totalPage){
            for (let i = (totalPage - 8); i <= totalPage; i++) {
                pageArr.push(i)
            }
        }else{
            for (let i = page - 3; i < page + 4; i++) {
                pageArr.push(i)
            }
        }
    }

    return (
        <>  
        <hr className="w-full my-2 md:my-4 opacity-60 text-white" />
            <div className="flex flex-row flex-wrap justify-center">
                {isFetching ?
                    <PageLoad />
                    :
                    data?.data?.map((anime) => (
                        <div
                            key={anime.mal_id}
                            className="min-w-[20%] max-w-[20%] md:max-w-[15%] md:min-w-[15%] mx-2 mb-[10px] md:mx-6 md:mb-6]">
                            <Card
                                data={anime} />
                        </div>
                    ))
                }
            </div>
            { page !== 0 &&
                <div className="flex flex-row text-center mb-5 text-white justify-center items-center">
                <button
                    onClick={() => page !== 1 && setPage(page - 1)
                    }> <RiArrowLeftSLine 
                    className="2xl:w-8 h-8"/></button>
                {pageArr.map((pageNum) => (
                    <button
                    key={`page-${pageNum}`}>
                        <div
                            className={`mx-1 ${[pageNum === page ? 'font-bold mx-3 text-base 2xl:text-xl opacity-100' : 'font-light text-sm 2xl:text-lg opacity-60']}`}
                            onClick={() => setPage(pageNum)}>
                            {pageNum}
                        </div>
                    </button>
                ))}
                <button
                    onClick={() => hasNextPage ? setPage(page + 1) : setPage(1)
                    }>
                    <RiArrowRightSLine 
                    className="2xl:w-8 h-8"/>
                </button>
            </div>}
        </>
    )
}

export default Page