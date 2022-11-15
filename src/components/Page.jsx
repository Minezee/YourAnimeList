import { Error, Card, PageLoad } from "../components";

import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'


const Page = ({ data, isFetching, error, setPage, page }) => {
    const hasNextPage = data?.pagination?.has_next_page;
    const pageArr = []

    if (page < 4) {
        for (let i = 1; i < 8; i++) {
            pageArr.push(i)
        }
    } else {
        for (let i = page - 3; i < page + 4; i++) {
            pageArr.push(i)
        }
    }

    if (error) return <Error />

    return (
        <>
            <div className="flex flex-row flex-wrap justify-center">
                {isFetching ?
                    <PageLoad />
                    :
                    data?.data?.map((anime) => (
                        <div
                            key={anime.mal_id}
                            className="min-w-[21.7%] max-w-[21.7%] md:max-w-[15%] md:min-w-[15%] mx-[6px] mb-2 md:mx-6 md:mb-6">
                            <Card
                                data={anime} />
                        </div>
                    ))
                }
            </div>
            <div className="flex flex-row text-center mb-5 text-white justify-center items-center">
                <button
                    onClick={() => page !== 1 && setPage(page - 1)
                    }> <RiArrowLeftSLine /></button>
                {pageArr.map((pageNum) => (
                    <button
                    key={`page-${pageNum}`}>
                        <div
                            className={`mx-1 ${[pageNum === page ? 'font-bold mx-3 text-base' : 'font-light text-sm']}`}
                            onClick={() => setPage(pageNum)}>
                            {pageNum}
                        </div>
                    </button>
                ))}
                <button
                    onClick={() => hasNextPage ? setPage(page + 1) : setPage(1)
                    }>
                    <RiArrowRightSLine />
                </button>
            </div>
        </>
    )
}

export default Page