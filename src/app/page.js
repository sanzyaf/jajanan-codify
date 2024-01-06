import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        {/* <Logo /> */}
        <Image
          src="/logo_jajanan_desktop.jpeg"
          width={180}
          height={180}
          className="hidden md:block"
          alt="hero-desktop-version"
        />
        {/* <Image
          src="/logo_jajanan_mobile.jpeg"
          width={30}
          height={50}
          className="hidden md:block"
          alt="hero-mobile-version"
        /> */}
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Jajanan!</strong> 
            Together let us create a better living and earning through community support.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span><Link href="\login">Log in</Link></span></Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
        <Image
          src="/hero_desktop.png"
          width={1000}
          height={760}
          className="hidden md:block"
          alt="hero"
      /> 
      {/* <Image
          src="/hero_mobile.png"
          width={560}
          height={620}
          className="hidden md:block"
          alt="hero"
      />       */}
        </div>
      </div>
    </main>
  );
}
