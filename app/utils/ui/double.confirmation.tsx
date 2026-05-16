export default function doubleConfirmation(
  originalReq: () => any,
  message: string,
  trigger: boolean,
  setTrigger: any,
) {
  if (!trigger) return;

  return (
    <main className="fixed inset-0 flex items-center justify-center z-50 px-5">
      <div className="flex flex-col gap-6 p-10 bg-white rounded-xl w-120 border border-gray-200 shadow-2xl">
        <div>
          <h2 className="text-gray-900 text-xl font-semibold mb-2">
            Are you sure?
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">{message}</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setTrigger(false)}
            className="flex-1 py-3 bg-gray-100 border border-gray-200 rounded-lg text-gray-500 text-sm font-medium
                       transition-all duration-150 hover:bg-gray-200 active:scale-95"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              originalReq();
              setTrigger(false);
            }}
            className="flex-1 py-3 bg-gray-900 rounded-lg text-white text-sm font-semibold
                       transition-all duration-150 hover:bg-black active:scale-95"
          >
            Confirm
          </button>
        </div>
      </div>
    </main>
  );
}
