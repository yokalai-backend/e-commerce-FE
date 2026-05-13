export default function Card({ index, imageUrl, changeImage }: any) {
  return (
    <div
      onClick={() => changeImage(imageUrl)}
      className="flex flex-col items-center gap-2"
    >
      <img
        className="w-full h-25 object-contain rounded-2xl active:translate-y-1.5 transition"
        src={imageUrl}
        alt=""
      />

      <p className="border border-black/60 w-8 rounded-2xl text-black/80 text-center">
        {index + 1}
      </p>
    </div>
  );
}
