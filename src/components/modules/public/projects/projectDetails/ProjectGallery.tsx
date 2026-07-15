import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";
import { IProject, IProjectGalleryImage } from "../projectsData";

// ProjectGallery Props
interface ProjectGalleryProps {
  project: IProject;
}

// Reusable GalleryImage Props (Sub Components)
interface GalleryImageProps {
  img: IProjectGalleryImage;
  aspectClass: string;
  sizes: string;
}

// Reusable GalleryImage (Sub Components)
const GalleryImage = ({ img, aspectClass, sizes }: GalleryImageProps) => {
  return (
    <div className={`group relative overflow-hidden rounded-sm ${aspectClass}`}>
      <Image
        src={img.url}
        alt={img.caption || "Project gallery image"}
        fill
        quality={85}
        sizes={sizes}
        className="object-cover transition-transform duration-1000 group-hover:scale-[1.03] transform-gpu will-change-transform backface-hidden"
      />
      {img.caption && (
        <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-foreground/50 to-transparent p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <p className="text-background/90 text-sm font-light">{img.caption}</p>
        </div>
      )}
    </div>
  );
};

// Row Layout (Sub Components)
const FullWidthRow = ({ image }: { image: IProjectGalleryImage }) => (
  <GalleryImage img={image} aspectClass="w-full aspect-video" sizes="100vw" />
);

const TwoColumnRow = ({ images }: { images: IProjectGalleryImage[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
    {images.map((img, idx) => (
      <GalleryImage
        key={img.url || idx}
        img={img}
        aspectClass="aspect-video"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    ))}
  </div>
);

const ThreeColumnRow = ({ images }: { images: IProjectGalleryImage[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
    {images.map((img, idx) => (
      <GalleryImage
        key={img.url || idx}
        img={img}
        aspectClass="aspect-video"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    ))}
  </div>
);

const SplitRow = ({ images }: { images: IProjectGalleryImage[] }) => {
  if (images.length < 2) return null;
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6 items-stretch">
      <div className="md:col-span-8">
        <GalleryImage
          img={images[0]}
          aspectClass="aspect-video"
          sizes="(max-width: 768px) 100vw, 66vw"
        />
      </div>
      <div className="md:col-span-4">
        <GalleryImage
          img={images[1]}
          aspectClass="aspect-video md:h-full md:aspect-auto"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
    </div>
  );
};

// ProjectGallery Component
const ProjectGallery = ({ project }: ProjectGalleryProps) => {
  if (!project.galleryImages || project.galleryImages.length === 0) return null;

  // Max 5 images are allowed
  const images = project.galleryImages.slice(0, 5);
  const count = images.length;

  // Render gallery based on the number of images
  const renderGallery = () => {
    switch (count) {
      case 1:
        return <FullWidthRow image={images[0]} />;
      case 2:
        return <TwoColumnRow images={images} />;
      case 3:
        return (
          <>
            <FullWidthRow image={images[0]} />
            <TwoColumnRow images={images.slice(1, 3)} />
          </>
        );
      case 4:
        return (
          <>
            <SplitRow images={images.slice(0, 2)} />
            <TwoColumnRow images={images.slice(2, 4)} />
          </>
        );
      case 5:
        return (
          <>
            <SplitRow images={images.slice(0, 2)} />
            <ThreeColumnRow images={images.slice(2, 5)} />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="project-gallery"
      aria-labelledby="gallery-heading"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden"
    >
      <div className="custom-container">
        {/* Section Header */}
        <SectionHeader
          variant="manifesto"
          badgeText="Visual Journey"
          headingId="gallery-heading"
          title={
            <>
              Project{" "}
              <span className="italic font-serif font-light text-liminal-secondary underline underline-offset-8 decoration-1">
                Gallery
              </span>
            </>
          }
          description="A curated collection of moments that reveal the depth, detail, and atmosphere of the completed space."
          className="mb-12"
        />

        {/* Gallery Grid */}
        <div className="space-y-5 lg:space-y-6">{renderGallery()}</div>
      </div>
    </section>
  );
};

export default ProjectGallery;
