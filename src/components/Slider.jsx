import Card from "./Card"
import SlideLoad from "./SlideLoad"
import Error from "./Error"
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Slider = ({ data, isFetching, error }) => {
    const animeData = data?.slice(0, 24)
    const windowWidth = window.innerWidth;

    if (error) return <Error />

    return (
        <div className="flex items-center justify-center">
            <div className="relative flex items-center h-[105px] md:h-[29vh] w-full md:w-[90%] mt-2 overflow-hidden">

                <Swiper
                    style={{
                        "--swiper-navigation-color": "#FFFFFF",
                        "--swiper-navigation-size": "20px",
                        "--swiper-navigation-height": "100%",
                    }}
                    slidesPerView={windowWidth > 1000 ? 8 : 4}
                    spaceBetween={windowWidth > 1000 ? 30 : 20}
                    slidesPerGroup={windowWidth > 1000 ? 8 : 4}
                    initialSlide={windowWidth > 1000 ? 8 : 4}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"

                >
                    {isFetching ?
                        <SlideLoad />
                        :
                        animeData?.map((anime) => (
                            <SwiperSlide
                                className="h-full"
                                key={anime.mal_id}
                            >
                                <Card
                                    data={anime} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

            </div>
        </div >
    )
}

export default Slider