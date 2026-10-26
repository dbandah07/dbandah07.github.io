import YouTube from './YouTube'

// a project's trailer: an imported .mp4 plays in the browser's own player,
// anything else is treated as a youtube link. autoplay is for when a click
// asked for it (the card cover), same as the youtube player
function Trailer({ src, title, poster, autoplay = false, className }) {
  if (/\.(mp4|webm)$/i.test(src)) {
    return (
      <video
        className={className}
        src={src}
        poster={poster}
        aria-label={`${title} trailer`}
        controls
        playsInline
        autoPlay={autoplay}
        // only fetch the whole file once someone hits play
        preload="metadata"
      />
    )
  }
  return <YouTube className={className} link={src} title={title} autoplay={autoplay} />
}

export default Trailer
