"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselCard {
  id: number
  name: string
  title: string
  description: string
  image: string
}

const cardsData: CarouselCard[] = [
  {
    id: 1,
    name: "Milli",
    title: "Sales Manager",
    description:
      "Milli uses your business insights for crafting compelling cold calls, scripts, designs persuasive cold emails, and build pitches that help you close deals with confidence. Milli is also capable of adapting sales strategies to different audiences and markets.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=500&fit=crop",
  },
  {
    id: 2,
    name: "Buddy",
    title: "Business Development Manager",
    description:
      "Business Development Manager. Your go-to AI for business development, crafting growth strategies, delivering business models and excelling in AI for marketing to ensure success in product launches, audience analysis, and more. Buddy has helped companies of all sizes achieve their business development goals.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
  },
  {
    id: 3,
    name: "Cassie",
    title: "Customer Support Specialist",
    description:
      "Customer Support Specialist. As a smart and charming AI, Cassie crafts expertly tailored responses to customer queries while maintaining your brand's unique voice. Cassie works alongside your human employees, supporting them to deliver exceptional customer support.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
  },
  {
    id: 4,
    name: "Luna",
    title: "Marketing Strategist",
    description:
      "Luna specializes in creating comprehensive marketing strategies that drive engagement and conversions. With expertise in digital marketing, social media campaigns, and brand positioning, Luna helps businesses reach their target audience effectively.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop",
  },
  {
    id: 5,
    name: "Alex",
    title: "Product Manager",
    description:
      "Alex brings innovative product thinking to your organization. Specializing in user research, feature prioritization, and roadmap development, Alex ensures your products meet market needs and exceed customer expectations.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
  },
]

export function InfiniteCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cardsData.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + cardsData.length) % cardsData.length)
    setIsAutoPlay(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cardsData.length)
    setIsAutoPlay(false)
  }

  const getVisibleCards = () => {
    const cards = []
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + cardsData.length) % cardsData.length
      cards.push(cardsData[index])
    }
    return cards
  }

  const visibleCards = getVisibleCards()

  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-foreground">Meet Our Helpers</h2>
        <p className="mt-2 text-muted-foreground">Choose the right AI assistant for your needs</p>
      </div>

      {/* Carousel Container */}
      <div className="relative py-8">
        {/* Carousel Container - now shows 5 cards with smooth transitions */}
        <div className="flex justify-center items-center gap-3 overflow-hidden px-4">
          {visibleCards.map((card, idx) => {
            const isCenter = idx === 2
            const distance = Math.abs(idx - 2)
            return (
              <div
                key={`${card.id}-${idx}`}
                className={`flex-shrink-0 transition-all duration-500 ease-out ${
                  isCenter ? "scale-100 opacity-100 z-20" : `scale-${85 - distance * 5} opacity-${100 - distance * 20}`
                }`}
              >
                <Card className="w-56 h-96 overflow-hidden bg-card shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-2xl border border-white/10">
                  <div className="relative h-72 overflow-hidden bg-muted">
                    <img
                      src={card.image || "/placeholder.svg"}
                      alt={card.name}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-card-foreground">{card.name}</h3>
                    <p className="text-xs text-muted-foreground mb-2">{card.title}</p>
                    <p className="text-xs text-card-foreground/80 line-clamp-3">{card.description}</p>
                  </div>
                </Card>
              </div>
            )
          })}
        </div>

        {/* Left Arrow */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-all duration-300 shadow-lg hover:shadow-2xl border border-white/30"
          aria-label="Previous card"
        >
          <ChevronLeft className="h-7 w-7" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-all duration-300 shadow-lg hover:shadow-2xl border border-white/30"
          aria-label="Next card"
        >
          <ChevronRight className="h-7 w-7" />
        </button>
      </div>

      {/* CTA Button */}
      <div className="mt-12 flex justify-center">
        <Button size="lg" className="rounded-full bg-blue-500 hover:bg-blue-600 text-white px-8">
          Get helpers
        </Button>
      </div>

      {/* Dots Indicator */}
      <div className="mt-8 flex justify-center gap-2">
        {cardsData.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrentIndex(idx)
              setIsAutoPlay(false)
            }}
            className={`h-2 rounded-full transition-all ${idx === currentIndex ? "w-8 bg-primary" : "w-2 bg-muted"}`}
            aria-label={`Go to card ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
