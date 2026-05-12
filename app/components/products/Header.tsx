export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <div className="w-6">
        <img className="w-full h-full object-cover" src="navbar.svg" alt="" />
      </div>

      <div className="flex gap-3 items-center">
        <div className="w-6.5">
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
