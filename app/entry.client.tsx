import "@shopify/polaris/build/esm/styles.css";

import { hydrateRoot } from "react-dom/client";
import { ClientRouter } from "react-router";

hydrateRoot(document, <ClientRouter />);