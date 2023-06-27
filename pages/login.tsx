import Head from 'next/head';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';
import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/router';

interface Inputs {
  email: string;
  password: string;
}

const Login = () => {
  const { signIn } = useAuth();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    await signIn(email, password);
  };

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

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md space-y-4 rounded bg-black/75 px-6 py-10 md:px-14"
      >
        <h1 className="text-3xl font-semibold tracking-wide text-white md:text-4xl">
          Sign In
        </h1>
        <div className="space-y-4">
          <label htmlFor="email" className="inline-block w-full">
            <input
              type="email"
              placeholder="Email"
              className="input"
              {...register('email', { required: true })}
            />
            {errors.email && (
              <span className="text-red-600 font-light text-sm inline-block ml-1 mt-2">
                Email is required!
              </span>
            )}
          </label>
          <label htmlFor="password" className="inline-block w-full">
            <input
              type="password"
              placeholder="Password"
              className="input"
              {...register('password', { required: true, minLength: 4 })}
            />
            {errors.password && (
              <span className="text-red-600 font-light text-sm inline-block ml-1 mt-2">
                At least 4 characters are required!
              </span>
            )}
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
          <button
            type="button"
            onClick={() => router.push('/signup')}
            className="ml-2 text-white hover:underline group"
          >
            Sign up now
            <ArrowRightIcon className="inline h-6 w-6 ml-2 text-white align-top group-hover:ml-3 transition-all ease-in-out duration-300" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
