import Button from "../components/Button";
import ErrorSVG from "../components/ErrorSVG";

function ErrorPage() {
  return (
    <div className="grid h-screen px-4 bg-white place-content-center">
      <div className="text-center">
        <ErrorSVG />

        <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </h1>

        <p className="mt-4 text-gray-500">We can&apos;t find that page.</p>
        {/* <Button
          className="rounded border border-zinc-950 bg-zinc-950 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-zinc-950 focus:outline-none focus:ring active:text-zinc-300 m-2"
          buttonLabel="Go Back Home"
          path="/"
        /> */}
        <Button
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 mt-5"
          buttonLabel="Go Back to Home"
          path="/"
        >
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
}

export default ErrorPage;
