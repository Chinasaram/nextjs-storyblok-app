import { storyblokEditable } from "@storyblok/react/rsc";
import Image from "next/image";

export default function MenuItem({ blok }) {
  return (
    <div className="menu-item" {...storyblokEditable(blok)}>
      {blok.image?.filename && (
        <div className="menu-item-image-wrapper">
          <Image 
            src={`${blok.image.filename}/m/400x400`} 
            alt={blok.image.alt || blok.name}
            className="menu-item-image"
          />
        </div>
      )}
      
      <div className="menu-item-content">
        <div className="menu-item-header">
          <h3 className="menu-item-name">{blok.name}</h3>
          {blok.price && (
            <span className="menu-item-price">${blok.price}</span>
          )}
        </div>
        
        {blok.description && (
          <p className="menu-item-description">{blok.description}</p>
        )}
        
        {blok.tags && blok.tags.length > 0 && (
          <div className="menu-item-tags">
            {blok.tags.split(',').map((tag, index) => (
              <span key={index} className="menu-item-tag">
                {tag.trim()}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}