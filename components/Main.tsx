import Body from "./Body";
import Header from "./Header";

export default function Main() {
  return (
    <div className=" w-[60%] h-[80%] bg-white rounded-md shadow-md flex flex-col">
      <Header />
      <Body />
    </div>
  )
}
