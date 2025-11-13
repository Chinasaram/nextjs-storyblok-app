import { storyblokEditable } from "@storyblok/react/rsc";

export default function Hero({ blok }) {
  // This logic for the Storyblok Image Service URL is perfect.
  const backgroundImageUrl = blok.background_image?.filename 
    ? `${blok.background_image.filename}/m/1920x1080/filters:quality(80)` 
    : '';

  return (
    <section 
      {...storyblokEditable(blok)}
      // --- Full-Bleed Fix ---
      // We use w-screen to get full viewport width, then center it
      // with left-1/2 and -translate-x-1/2 to break out of any
      // parent container's padding or max-width.
      className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden
                 w-screen left-1/2 -translate-x-1/2"
    >
      {/* --- Background Image Fix --- */}
      {/* The image is now a sibling to the overlay, not its parent. */}
      {/* It sits at z-0, in the very back. */}
      {backgroundImageUrl && (
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        />
      )}
      
      {/* --- Overlay Fix --- */}
      {/* The overlay is also a sibling, on top of the image (z-10) */}
      <div className="absolute inset-0 bg-black/60 z-10" />
      
      {/* Hero Content */}
      {/* The content sits on top of everything (z-20) */}
      <div className="relative z-20 text-center px-4 max-w-3xl mx-auto">
        
        {/* Optional Icon */}
        {blok.icon && (
          <div className="flex justify-center mb-6">
            {/* Added text-white to ensure icon is visible */}
            <span className="text-6xl text-white">{blok.icon}</span>
          </div>
        )}
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
          {blok.title}
        </h1>
        
        {blok.subtitle && (
          <p className="text-xl md:text-2xl text-white/90 font-light drop-shadow-md">
            {blok.subtitle}
          </p>
        )}

        {/* Optional Button */}
        {blok.button_text && (
          <div className="mt-8">
            <a 
              href={blok.button_link?.cached_url || '#'} 
              // Updated styling to use our brand-accent color
              className="inline-block px-8 py-3 bg-brand-accent text-white font-semibold rounded-md 
                        shadow-lg hover:shadow-xl hover:bg-opacity-90 
                        transition-all duration-300"
            >
              {blok.button_text}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}