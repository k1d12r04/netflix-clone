import Head from 'next/head';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';
import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Inputs {
  email: string;
  password: string;
}

const Login = () => {
  const { signIn } = useAuth();
  const router = useRouter();
  const { loading } = useAuth();

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

      <ToastContainer />

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
          Login
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

        {loading ? (
          <button
            disabled
            type="button"
            className="w-full rounded bg-[#e50914] py-3 font-semibold tracking-wide hover:opacity-90 transition"
          >
            <svg
              aria-hidden="true"
              role="status"
              className="inline w-4 h-4 mr-3 text-white animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
            Loading...
          </button>
        ) : (
          <button
            type="submit"
            className="w-full rounded bg-[#e50914] py-3 font-semibold tracking-wide hover:opacity-90 transition"
          >
            Login
          </button>
        )}

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
