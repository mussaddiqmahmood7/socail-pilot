import Image from "next/image";
import AuthImage from "@/assets/auth/authImage.png"
import SocailLogin from "@/components/auth/SocailLogin";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-5 2xl:grid-cols-3 w-full min-h-screen">
      <div className="w-full col-span-3 2xl:col-span-2 p-5 h-full flex flex-col gap-10 justify-center items-center relative bg-[#F0F1F9]">
        <div className="text-brandColor absolute top-3 sm:top-5 left-3 sm:left-5 font-semibold text-2xl sm:text-3xl">Social Pilot</div>
        <div className="text-gray-800 text-3xl">Hi Welcome Back</div>
      <Image alt="auth image" src={AuthImage} className="max-w-xl"/>
      </div>
      <div className="flex flex-col col-span-2 2xl:col-span-1 gap-5 justify-center items-center p-5 overflow-hidden bg-white text-gray-800">
        {children}
        <div className="flex items-center gap-5 max-w-md w-full"><div className="w-full h-[1px] rounded-full bg-gray-500"></div><p className="text-gray-500">or</p><div className="w-full h-[1px] rounded-full bg-gray-500"></div></div>
        <SocailLogin/>
      </div>
    </div>
  );
}
