import HeroSection from '@/components/home/hero-section';
import { CardCarousel } from '@/components/home/card-carousel';
import { CardCarousel2nd } from '@/components/home/card-carousel-2nd';

export default function Page() {
  return (
    <>
      <HeroSection />
      <CardCarousel2nd
        agents={[
    {
      image: "/image.png",
      name: "Cassie",
      role: "Customer Support Specialist",
      description:
        "Crafts expertly tailored responses while maintaining your brand voice.",
    },
    {
      image: "/image2.png",
      name: "Alex",
      role: "Sales Assistant",
      description:
        "Engages leads and follows up automatically to close more deals.",
    },
    {
      image: "/image3.png",
      name: "Mila",
      role: "Marketing Manager",
      description:
        "Plans and executes campaigns across channels with precision.",
    },
    {
      image: "/image4.png",
      name: "Leo",
      role: "Operations Agent",
      description:
        "Keeps workflows smooth and processes optimized.",
    },
    {
      image: "/image5.png",
      name: "Nora",
      role: "HR Assistant",
      description:
        "Manages hiring, onboarding, and employee support.",
    },
  ]}
        autoplayDelay={20000}
        showPagination={true}
        showNavigation={true}
      />
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