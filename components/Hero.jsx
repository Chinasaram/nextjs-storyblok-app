import { storyblokEditable } from "@storyblok/react/rsc";
import Image from "next/image";

export default function Hero({ blok }) {
  return (
    <section className="hero-section" {...storyblokEditable(blok)}>
      <div className="hero-content">
        <h1 className="hero-title">{blok.title}</h1>
        <p className="hero-subtitle">{blok.subtitle}</p>
        {blok.button_text && (
          <a href={blok.button_link?.cached_url || '#'} className="hero-button">
            {blok.button_text}
          </a>
        )}
      </div>
      {blok.background_image?.filename && (
        <div className="hero-image-wrapper">
          <Image 
            src={`${blok.background_image.filename}/m/1200x600`} 
            alt={blok.background_image.alt || blok.title}
            className="hero-image"
          />
        </div>
      )}
    </section>
  );
}