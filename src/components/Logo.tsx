import Image from "next/image";
export default function Logo() {
  return (
    <div className="w-fit flex justify-center align-text-center items-center mx-5 gap-5">
      <Image src="/logo.svg" alt="logo" width={50} height={50} />
      <p className="text-gray-light  uppercase font-bold text-lg">
        Class Diagram Generator
      </p>
    </div>
  );
}
