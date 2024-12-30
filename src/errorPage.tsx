import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavLink from "./components/navigation/NavLink";

export default function ErrorPage() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 401) {
      // ...
    }
    else if (error.status === 404) {
      // ...
    }

    return (
      <body className="bg-orange-100/75 h-screen w-screen">
        <div className="flex h-full">
          <div className="absolute flex flex-row h-16"><NavLink destination="duplantis.org" home={true} /></div>
          <div className="m-auto justify-center">
              <h1 className="text-3xl text-orange-950/75 text-center cursor-default select-none">{`Error: ${error.status}: ${error.statusText}`}</h1>
          </div>
        </div>
      </body>
      /*
      <div id="error-page">
        <h1>Oops! {error.status}</h1>
        <p>{error.statusText}</p>
        {error.data?.message && (
          <p>
            <i>{error.data.message}</i>
          </p>
        )}
      </div>*/
    );
  } else if (error instanceof Error) {
    return (
      <div id="error-page">
        <h1>Oops! Unexpected Error</h1>
        <p>Something went wrong.</p>
        <p>
          <i>{error.message}</i>
        </p>
      </div>
    );
  } else {
    return <></>;
  }
}