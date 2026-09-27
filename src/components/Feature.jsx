
import { storyblokEditable } from '@storyblok/react/rsc';

const Feature = ({ blok }) => {
  return (
    <div className="feature" {...storyblokEditable(blok)}>
      {blok.image?.filename && (
        <img
          src={blok.image.filename}
          alt={blok.image.alt || blok.name || '7Souls collection'}
          className="feature-image"
        />
      )}

      <h2>{blok.name}</h2>

      {blok.description && (
        <p className="feature-description">
          {blok.description}
        </p>
      )}
    </div>
  );
};

export default Feature;
