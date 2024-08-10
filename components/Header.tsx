export default function Header() {
  return (
    <div className=" bg-[#F5EDE0] h-[10%] w-full flex justify-between items-center rounded-md">
      <div className=" pl-4 flex gap-x-1">
        <div className=" h-4 w-4 rounded-full bg-[#ae926b]"></div>
        <div className=" h-4 w-4 rounded-full bg-[#ae926b]"></div>
        <div className=" h-4 w-4 rounded-full bg-[#ae926b]"></div>
      </div>
      <div className=" pr-4">
        <p className=" text-black text-sm">Bagpack</p>
      </div>
    </div>
  )
}
