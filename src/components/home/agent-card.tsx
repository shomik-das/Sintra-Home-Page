import Image from "next/image"

interface AgentCardProps {
  image: string
  name: string
  role: string
  description: string
}

export function AgentCard({
  image,
  name,
  role,
  description,
}: AgentCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl bg-background">
      {/* Image */}
      <div className="relative aspect-3/4 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover "
        />

        {/* Image bottom fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t" />
      </div>

      {/* Text content */}
      <div className="space-y-2 px-4 pb-5 pt-4 text-white">
        <h3 className="text-2xl font-semibold">{name}</h3>
        <p className="text-sm text-white/70">{role}</p>

        <p className="pt-1 text-sm leading-relaxed text-white/60">
          {description}
        </p>
      </div>
    </div>
  )
}
