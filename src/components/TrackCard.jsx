import { useState } from 'react';
import { getTrackCoverUrl } from '../sanity/imageBuilder';

const TrackCard = ({
  title,
  coverImage,
  releaseYear,
  duration,
  spotifyLink,
  appleMusicLink
}) => {
  const [imageError, setImageError] = useState(false);

  // Generate optimized cover image URL with hotspot support
  const coverImageUrl = getTrackCoverUrl(coverImage, 400);
  const showFallback = !coverImage || !coverImageUrl || imageError;

  const handleImageError = () => {
    console.error('[TrackCard] Cover image failed to load:', coverImageUrl);
    setImageError(true);
  };

  return (
    <article className="group bg-white/5 border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 transition-all duration-300 hover:border-[#e7d393] hover:scale-105">
      {/* Cover Image or Fallback */}
      <div className="relative w-full aspect-square mb-3 sm:mb-4 rounded-md sm:rounded-lg overflow-hidden">
        {showFallback ? (
          <div className="w-full h-full bg-gradient-to-br from-[#694D29] to-black flex items-center justify-center" role="img" aria-label="Music track placeholder">
            <span className="text-6xl sm:text-7xl md:text-8xl text-white/20" aria-hidden="true">♪</span>
          </div>
        ) : (
          <img
            src={coverImageUrl}
            alt={`${title} album cover art`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
        )}
      </div>

      {/* Track Information */}
      <div className="space-y-1.5 sm:space-y-2">
        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white truncate">
          {title || 'Untitled Track'}
        </h3>

        {/* Metadata Row */}
        <div className="flex items-center justify-between text-xs sm:text-sm text-white/70">
          {releaseYear && <span aria-label={`Released in ${releaseYear}`}>{releaseYear}</span>}
          {duration && <span aria-label={`Duration ${duration}`}>{duration}</span>}
        </div>

        {/* External Links */}
        {(spotifyLink || appleMusicLink) && (
          <div className="flex items-center gap-2 pt-1 sm:pt-2" role="group" aria-label="Streaming platform links">
            {spotifyLink && (
              <a
                href={spotifyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-[#1DB954] transition-colors duration-200 touch-manipulation"
                aria-label={`Listen to ${title} on Spotify`}
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
              </a>
            )}
            {appleMusicLink && (
              <a
                href={appleMusicLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-[#FA243C] transition-colors duration-200 touch-manipulation"
                aria-label={`Listen to ${title} on Apple Music`}
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M23.997 6.124c0-.738-.065-1.47-.24-2.19-.317-1.31-1.062-2.31-2.18-3.043C21.003.517 20.373.285 19.7.164c-.517-.093-1.038-.135-1.564-.15-.04-.003-.083-.01-.124-.013H5.988c-.152.01-.303.017-.455.026C4.786.07 4.043.15 3.34.428 2.004.958 1.04 1.88.475 3.208c-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.801.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03c.525 0 1.048-.034 1.57-.1.823-.106 1.597-.35 2.296-.81a5.28 5.28 0 0 0 1.88-2.207c.186-.42.293-.87.37-1.324.113-.675.138-1.358.137-2.04-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206-.29.59-.76 1.035-1.36 1.322-.63.302-1.29.455-1.987.465-.963.014-1.904-.13-2.763-.655-.85-.52-1.39-1.27-1.55-2.265-.124-.773.044-1.498.537-2.13.64-.82 1.48-1.278 2.51-1.397.77-.09 1.543-.044 2.29.192.22.07.424.174.605.315.33.257.49.597.49 1.002-.002 2.023 0 4.047 0 6.07 0 .06-.004.12-.01.18-.01.11-.06.18-.17.2-.1.02-.19-.02-.25-.1-.04-.06-.07-.13-.09-.2-.04-.13-.06-.27-.06-.41v-2.71c0-.27-.01-.54 0-.81.01-.14-.04-.24-.16-.31-.13-.08-.27-.14-.41-.19-.65-.22-1.32-.34-2.01-.31-.67.03-1.31.17-1.91.5-.82.44-1.37 1.09-1.6 1.98-.16.63-.13 1.25.09 1.86.27.75.77 1.3 1.48 1.65.88.43 1.82.54 2.78.43.85-.1 1.62-.43 2.27-1.02.35-.32.59-.7.73-1.15.1-.3.15-.61.15-.93V6.91c0-.12.01-.25.03-.37.03-.16.12-.26.28-.3.17-.03.34-.04.51-.04h3.78c.27 0 .53.01.79.05.18.03.28.13.3.31.02.13.03.26.03.39v3.996z" />
                </svg>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export default TrackCard;
