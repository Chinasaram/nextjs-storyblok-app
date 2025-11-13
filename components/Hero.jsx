import { storyblokEditable } from "@storyblok/react/rsc";

export default function Hero({ blok }) {
  const backgroundImageUrl = blok.background_image?.filename 
    ? `${blok.background_image.filename}/m/1920x1080/filters:quality(80)` 
    : '';

  return (
    <section 
      className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden"
      {...storyblokEditable(blok)}
    >
      {/* Background Image */}
      {backgroundImageUrl && (
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
      )}
      
      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
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
      </div>
    </section>
  );
}