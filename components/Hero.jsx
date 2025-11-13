import { storyblokEditable } from "@storyblok/react/rsc";
import Image from "next/image";

export default function Hero({ blok }) {
  const backgroundImageUrl = blok.background_image?.filename 
    ? `${blok.background_image.filename}/m/1920x1080/filters:quality(80)` 
    : '';

  return (
    <section 
      className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden"
      style={{ width: '100vw', marginLeft: 'calc(50% - 50vw)' }}
      {...storyblokEditable(blok)}
    >
      {/* Background Image */}
      {backgroundImageUrl && (
        <div className="absolute inset-0 z-0">
          <Image 
            src={backgroundImageUrl}
            alt={blok.background_image?.alt || blok.title || 'Hero background'}
            fill
            className="object-cover"
            priority
            quality={80}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
        </div>
      )}
      
      {/* Hero Content */}
      <div className="relative z-20 text-center px-4 max-w-3xl mx-auto">
        {/* Optional Icon */}
        {blok.icon && (
          <div className="flex justify-center mb-6">
            <span className="text-6xl">{blok.icon}</span>
          </div>
        )}
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
          {blok.title}
        </h1>
        
        {blok.subtitle && (
          <p className="text-xl md:text-2xl text-white/90 font-light">
            {blok.subtitle}
          </p>
        )}

        {/* Optional Button */}
        {blok.button_text && (
          <div className="mt-8">
            <a 
              href={blok.button_link?.cached_url || '#'} 
              className="inline-block px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              {blok.button_text}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}