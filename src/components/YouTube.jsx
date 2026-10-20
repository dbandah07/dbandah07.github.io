// youtube player for a watch or share link. autoplay is for when a click
// asked for it (the card cover), so the video doesn't need a second click
function YouTube({ link, title, autoplay = false, className }) {
  const url = new URL(link)
  const id =
    url.hostname === 'youtu.be'
      ? url.pathname.slice(1)
      : url.searchParams.get('v')
  if (!id) return null

  return (
    <iframe
      className={className}
      src={`https://www.youtube-nocookie.com/embed/${id}${autoplay ? '?autoplay=1' : ''}`}
      title={`${title} trailer`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      // youtube refuses to play embeds that don't say which site they're on
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  )
}

export default YouTube
