export default function Header({ router }: any) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 bg-white py-3 rounded-2xl">
      <div className="w-6">
        <img className="w-full h-full object-cover" src="navbar.svg" alt="" />
      </div>

      <div className="flex gap-3 items-center">
        <div onClick={() => router.push("/cart")} className="w-6.5">
          <img className="w-full h-full" src="cart.svg" alt="" />
        </div>

        <input
          className="bg-gray-200 px-2 text-black/70 py-1 rounded-xl focus:outline-none w-50"
          type="text"
          placeholder="Search..."
        />

        <div className="w-7">
          <img
            className="w-full h-full object-cover"
            src="setting.svg"
            alt=""
          />
        </div>
      </div>
    </header>
  );
}
