/* 
  REVIEW:
  I think this ribbon implementation is pretty cool. 
  Would love a review though.
  You could easily add props for the position ('top-left', 'bottom-right', ...), size, etc.
  What I like is you can just change the `width` utility on the parentmost div, 
  and the ribbon size will adjust (thanks aspect-ratio).
*/
export function Ribbon() {
  return (
    <div className="absolute -right-2 -top-2 z-10 aspect-square w-32 overflow-hidden rounded-sm">
      <div className="absolute h-2 w-2 bg-amber-500"></div>
      <div className="absolute bottom-0 right-0 h-2 w-2 bg-amber-500"></div>
      <div className="w-square-diagonal absolute bottom-0 right-0 origin-bottom-right rotate-45">
        <a
          href="#"
          className="flex flex-col items-center bg-amber-300 py-2.5 shadow hover:bg-yellow-300"
        >
          <span className="text-[10px] font-semibold uppercase leading-none tracking-wide text-amber-900/60">
            Powered by
          </span>
          <span className="font-bold leading-none text-amber-900">Badass.dev</span>
        </a>
      </div>
    </div>
  )
}
