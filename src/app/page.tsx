import HeroSection from '@/components/home/hero-section';
import { HeroHeader } from '@/components/common/header';
import { InfiniteCarousel } from '@/components/home/Infinite-Carousel';
import { CardCarousel } from '@/components/home/card-carousel';

export default function Page() {
  return (
    <>
      <HeroHeader />
      <HeroSection />
      <CardCarousel
        images={[
          { src: '/image.png', alt: 'Image 1' },
          { src: '/image.png', alt: 'Image 2' },
          { src: '/image.png', alt: 'Image 3' },
          { src: '/image.png', alt: 'Image 4' },
          { src: '/image.png', alt: 'Image 5' },
        ]}
        autoplayDelay={20000}
        showPagination={true}
        showNavigation={true}
      />
    </>
  )
}