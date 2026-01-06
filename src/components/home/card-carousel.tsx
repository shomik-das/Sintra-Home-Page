"use client"

import React from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules"
import { AgentCard } from "./agent-card"


interface Agent {
  image: string
  name: string
  role: string
  description: string
}

interface CardCarousel2ndProps {
  agents: Agent[]
  autoplayDelay?: number
  showPagination?: boolean
  showNavigation?: boolean
}



export const CardCarousel: React.FC<CardCarousel2ndProps> = ({
  agents,
  autoplayDelay = 1500,
  showPagination = true,
  showNavigation = true,
}) => {
  const css = `
  .swiper {
    width: 100%;
    padding-bottom: 50px;
  }
  
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 320px;
    /* height: 300px; */
    /* margin: 20px; */
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
  }
  
  
  .swiper-3d .swiper-slide-shadow-left {
    background-image: none;
  }
  .swiper-3d .swiper-slide-shadow-right{
    background: none;
  }
  .swiper-pagination {
    bottom: 0 !important;
  }
  
  .swiper-pagination-bullet {
    background: rgba(255, 255, 255, 0.4);
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background: white;
  }
  `
  return (
    <section className="w-ace-y-4 mb-24">
      <style>{css}</style>
      <div className="mx-auto w-full max-w-6xl rounded-[24px] md:rounded-t-[44px]">
        <div className="relative mx-auto flex w-full flex-col rounded-[24px]  md:items-start md:gap-8 md:rounded-b-4xl md:rounded-t-[40px]">
          <div className="flex flex-col justify-center pb-2 pt-14 md:items-center">
            <div className="flex p-6 gap-2">
              <div>
                <h3 className="text-4xl opacity-85 font-bold tracking-tight">
                  Automates work
                </h3>
                <p className="text-muted-foreground" >Automate tasks with business automation tools.</p>
              </div>
            </div>
          </div>

          <div className="flex w-full items-center justify-center gap-4">
            <div className="relative w-full">
              <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-background to-transparent" />
                  {/* RIGHT FADE */}
              <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-background to-transparent" />
              <Swiper
                spaceBetween={25}
                autoplay={{
                  delay: autoplayDelay,
                  disableOnInteraction: false,
                }}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={"auto"}
                pagination={showPagination}
                navigation={
                  showNavigation
                    ? {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                      }
                    : undefined
                }
                modules={[ Autoplay, Pagination, Navigation]}
              >
                {agents.map((agent, index) => (
              <SwiperSlide key={index}>
                <AgentCard
                  image={agent.image}
                  name={agent.name}
                  role={agent.role}
                  description={agent.description}
                />
              </SwiperSlide>
            ))}
                {agents.map((agent, index) => (
              <SwiperSlide key={index}>
                <AgentCard
                  image={agent.image}
                  name={agent.name}
                  role={agent.role}
                  description={agent.description}
                />
              </SwiperSlide>
            ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
