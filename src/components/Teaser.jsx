import { storyblokEditable } from '@storyblok/react/rsc';

const Teaser = ({ blok }) => {
  return (
    <div className="teaser" {...storyblokEditable(blok)}>
      {blok.image?.filename && (
        <img
          src={blok.image.filename}
          alt={blok.image.alt || blok.headline || '7Souls jewelry'}
          className="teaser-image"
        />
      )}

      <h1>{blok.headline}</h1>

      {blok.description && (
        <p className="teaser-description">
          {blok.description}
        </p>
      )}
    </div>
  );
};

export default Teaser;
