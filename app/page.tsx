import Main from "@/components/Main";

export default function Home() {
  return (
    <div className=" h-screen bg-[#d1ba98] flex flex-col justify-center items-center px-4">
      <Main />
      <p className=" text-center p-2 text-sm text-gray-950">&copy; 2024 Copyright by SandBox</p>
    </div>
  );
}
