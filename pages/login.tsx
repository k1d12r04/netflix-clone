import Head from 'next/head';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

const Login = () => {
  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center bg-black sm:bg-transparent">
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image
        src="https://rb.gy/p2hphi"
        alt="netflix-bg"
        fill
        className="-z-10 !hidden object-cover opacity-60 sm:!inline"
      />

      <Image
        src="/netflix-logo.svg"
        alt="netflix logo"
        width={100}
        height={100}
        className="w-30 absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6 md:w-40 "
        priority
      />

      <form className="max-w-md space-y-4 rounded bg-black/75 px-6 py-10 md:px-14">
        <h1 className="text-3xl font-semibold tracking-wide text-white md:text-4xl">
          Sign In
        </h1>
        <div className="space-y-4">
          <label htmlFor="email" className="inline-block w-full">
            <input type="email" placeholder="Email" className="input" />
          </label>
          <label htmlFor="password" className="inline-block w-full">
            <input type="password" placeholder="Password" className="input" />
          </label>
        </div>

        <button
          type="submit"
          className="w-full rounded bg-[#e50914] py-3 font-semibold tracking-wide hover:opacity-90 transition"
        >
          Sign in
        </button>

        <div className="text-white/70">
          New to Netflix ?
          <button className="ml-2 text-white hover:underline group">
            Sign up now
            <ArrowRightIcon className="inline h-6 w-6 ml-2 text-white align-top group-hover:ml-3 transition-all ease-in-out duration-300" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
