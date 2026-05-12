export default function Comment() {
  return (
    <main>
      <div className="flex gap-3 border-b-2 border-b-black/20 border-l-4 border-l-black/30 px-2 py-2">
        <p className="border border-black/70 w-10 h-10 rounded-full flex items-center justify-center shrink-0">
          Y
        </p>
        <div>
          <div className="flex justify-between">
            <p className="text-sm text-black/70">Yoka</p>
            <p className="text-right text-sm text-black/70">4.3</p>
          </div>

          <p className="line-clamp-5">
            Good products i love it i hope the seller kept on selling these
            kinds of product!
          </p>
        </div>
      </div>
    </main>
  );
}
