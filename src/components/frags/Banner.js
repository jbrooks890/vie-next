export default function Banner({ src }) {
  return (
    <div className="banner-img-wrap">
      <img src={src} className="banner-img" />
    </div>
  );
}
