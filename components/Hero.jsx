import { storyblokEditable } from "@storyblok/react/rsc";
import Image from "next/image";

export default function Hero({ blok }) {
  const backgroundImageUrl = blok.background_image?.filename 
    ? `${blok.background_image.filename}/m/1920x1080/filters:quality(80)` 
    : '';

  return (
    <section 
      className="hero-section" 
      {...storyblokEditable(blok)}
      style={{
        position: 'relative',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Background Image */}
      {backgroundImageUrl && (
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0
          }}
        >
          <Image 
            src={backgroundImageUrl} 
            alt={blok.background_image.alt || blok.title || 'Hero background'}
            fill
            style={{ objectFit: 'cover' }}
            priority
            quality={80}
          />
          {/* Optional overlay for better text readability */}
          <div 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              zIndex: 1
            }}
          />
        </div>
      )}

      {/* Hero Content */}
      <div 
        className="hero-content"
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          color: 'white',
          maxWidth: '800px',
          padding: '2rem'
        }}
      >
        <h1 className="hero-title">{blok.title}</h1>
        <p className="hero-subtitle">{blok.subtitle}</p>
        {blok.button_text && (
          <a 
            href={blok.button_link?.cached_url || '#'} 
            className="hero-button"
          >
            {blok.button_text}
          </a>
        )}
      </div>
    </section>
  );
}