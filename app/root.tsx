import { Scripts, ScrollRestoration, type LinksFunction, type MetaFunction } from "react-router";
import { Links, Meta, Outlet } from "react-router/internal/react-server-client";
import Navigation from "./widgets/Navigation";
import Footer from "./widgets/Footer";


export const meta: MetaFunction = () => {
  return [
    { title: "Djardin - My Fabulous Garden" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { charSet: "utf-8" },
  ];
};

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: "app/index.css" },
  ];
};

export default function Root() {
  return (
    <html lang="fr">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-dj-green-50 flex flex-row relative gap-2">
        <Navigation />
        <div className="flex flex-col gap-5 relative grow p-2">
          <Outlet />
          <Footer />
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
