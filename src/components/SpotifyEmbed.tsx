export default function SpotifyEmbed({ url }: { url: string }) {
  return (
    <iframe
      style={{ borderRadius: '12px' }}
      src={url}
      width="100%"
      height="152"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
}
