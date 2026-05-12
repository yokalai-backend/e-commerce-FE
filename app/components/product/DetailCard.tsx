type DetailInput = {
  title: string;
  value: number | string;
};

export default function DetailCard({ title, value }: DetailInput) {
  return (
    <div className="bg-linear-to-r from-gray-200 rounded-sm px-1 shadow-md active:scale-95 transition active:opacity-80 active:shadow-lg select-none">
      <p className="text-sm text-black/80">{title}</p>
      <p className="text-right text-lg font-semibold">{value}</p>
    </div>
  );
}
