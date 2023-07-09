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

        <Button
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 mt-5"
          buttonLabel="Go Back to Home"
          path="/"
        />
      </div>
    </div>
  );
}

export default ErrorPage;
