import HeroSection from '@/components/home/hero-section';
import { CardCarousel } from '@/components/home/card-carousel';

export default function Page() {
  return (
    <>
      <HeroSection />
      <CardCarousel
        images={[
          { src: '/image.png', alt: 'Image 1' },
          { src: '/image2.png', alt: 'Image 2' },
          { src: '/image3.png', alt: 'Image 3' },
          { src: '/image4.png', alt: 'Image 4' },
          { src: '/image5.png', alt: 'Image 5' },
          { src: '/image6.png', alt: 'Image 6' },
        ]}
        autoplayDelay={20000}
        showPagination={true}
        showNavigation={true}
      />
    </>
  )
}