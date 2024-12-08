import Link from "next/link";

export default function Error(){
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <h1 className="text-6xl font-bold text-[#FF9F0D] mb-4">404</h1>
      <h2 className="text-2xl font-bold text-slate-900 mb-2">
        Oops! Look likes something going wrong
      </h2>
      <p className="text-gray-500 text-center mb-6">
        Page cannot be found! We will have it figured out in no time. <br />
        Meanwhile, check out these fresh ideas:
      </p>
      <Link href="/" className="px-6 py-3 bg-[#FF9F0D] text-white font-medium rounded-md shadow hover:bg-[#e4890b] transition">
          Go to home
      </Link>
    </div>
  );
};
