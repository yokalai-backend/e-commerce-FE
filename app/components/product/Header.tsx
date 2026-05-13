import Card from "./Card";

export default function Header({
  name,
  image,
  images,
  setCurrentImage,
}: {
  name: string;
  image: string;
  images: string[];
  setCurrentImage: any;
}) {
  return (
    <header className="flex flex-col gap-3">
      <button className="text-sm text-left text-black/70 underline">
        Go back
      </button>

      <div>
        <img className="w-full h-70 object-contain" src={image} alt="" />
      </div>

      {images && (
        <div className="flex flex-col">
          <h2 className="text-lg text-black/80 font-semibold border-b border-b-black/20 border-l-4 border-l-black/20 px-3 rounded-2xl mb-4">
            Preview
          </h2>

          <section className="grid grid-cols-5 gap-2">
            {images.map((e, i) => (
              <Card
                index={i}
                imageUrl={e}
                key={i}
                changeImage={setCurrentImage}
              />
            ))}
          </section>
        </div>
      )}

      <div className="border-t border-t-black/20">
        <h1 className="text-2xl line-clamp-10 mt-5">{name}</h1>
      </div>
    </header>
  );
}
