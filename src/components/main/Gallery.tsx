import Image from "next/image"
import Divider from "./Divider"

export default function GallerySection() {
  const galleryItems = [
    { src: "/assets/gallery/gallery10.png", alt: "Gallery image 1", className: "col-span-1 row-span-2" },
    { src: "/assets/gallery/gallery5.jpg", alt: "Gallery image 2", className: "col-span-1 row-span-2" },
    { src: "/assets/gallery/gallery6.jpg", alt: "Gallery image 3", className: "lg:col-span-1 row-span-2 sm:col-span-2" },
    { src: "/assets/gallery/gallery4.jpg", alt: "Gallery image 4", className: "col-span-2 row-span-2" },
    { src: "/assets/gallery/gallery2.jpg", alt: "Gallery image 5", className: "col-span-1 row-span-1" },
    { src: "/assets/gallery/gallery3.jpg", alt: "Gallery image 6", className: "col-span-1 row-span-1" },
    { src: "/assets/gallery/gallery9.png", alt: "Gallery image 6", className: "col-span-1 row-span-2" },
    { src: "/assets/gallery/gallery8.jpg", alt: "Gallery image 5", className: "col-span-1 row-span-2" },
    { src: "/assets/gallery/gallery7.jpg", alt: "Gallery image 6", className: "lg:col-span-1 row-span-2 sm:col-span-2" },
  ]

  return (
    <section className="w-full py-24 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-tr text-primary" style={{ color: "rgba(236, 71, 85, var(--tw-text-opacity))" }}
          >
          Khoảng khắc
          </span>
          {' của '}
          <span className="text-transparent bg-clip-text bg-gradient-to-tr text-primary" style={{ color: "rgba(236, 71, 85, var(--tw-text-opacity))" }}>
          BacPack
          </span>
        </h2>
        <Divider />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[200px] gap-4">
          {galleryItems.map((item, index) => (
            <div key={index} className={`relative overflow-hidden rounded-lg shadow-lg ${item.className}`}>
              <Image
                src={item.src}
                alt={item.alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}