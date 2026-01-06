import HeroSection from '@/components/home/hero-section';
import { CardCarousel } from '@/components/home/card-carousel';
import { CardCarousel2nd } from '@/components/home/card-carousel-2nd';


const agents = [
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
  ]

export default function Page() {
  return (
    <>
      <HeroSection />
      <CardCarousel2nd
        agents={agents}
        autoplayDelay={20000}
        showPagination={true}
        showNavigation={true}
      />
      <CardCarousel
        agents={agents}
        autoplayDelay={20000}
        showPagination={true}
        showNavigation={true}
      />
    </>
  )
}