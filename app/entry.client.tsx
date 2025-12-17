import { hydrateRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { createRouter } from "@react-router/dev";

import routes from "./routes";

const router = createRouter({
  routes,
});

hydrateRoot(
  document,
  <RouterProvider router={router} />
);
