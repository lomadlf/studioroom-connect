import type {
  HeadersFunction,
  LoaderFunctionArgs,
} from "react-router";
import { authenticate } from "../shopify.server";
import { boundary } from "@shopify/shopify-app-react-router/server";

/**
 * Loader
 * - Ensures the app is embedded
 * - Ensures the merchant is authenticated
 */
export const loader = async ({ request }: LoaderFunctionArgs) => {
  await authenticate.admin(request);
  return null;
};

/**
 * Main App Home
 * Minimal embedded UI required for Shopify review
 */
export default function Index() {
  return (
    <s-page heading="StudioRoom Connect">
      <s-section>
        <s-paragraph>
          StudioRoom Connect allows merchants to link their Shopify store
          with their StudioRoom account.
        </s-paragraph>

        <s-paragraph>
          Product images are processed externally on studioroom.fr.
          No product data is modified without explicit user action.
        </s-paragraph>

        <s-stack direction="inline" gap="base">
          <s-badge tone="success">Account connected</s-badge>
        </s-stack>

        <s-stack
          direction="inline"
          gap="base"
          style={{ marginTop: "1rem" }}
        >
          <s-button
            variant="primary"
            href="https://studioroom.fr/dashboard"
            target="_blank"
          >
            Open StudioRoom
          </s-button>

          <s-button variant="secondary" tone="critical">
            Disconnect account
          </s-button>
        </s-stack>

        <s-paragraph tone="subdued" style={{ marginTop: "1rem" }}>
          You can disconnect your account at any time.
        </s-paragraph>
      </s-section>
    </s-page>
  );
}

/**
 * Required headers for Shopify embedded apps
 */
export const headers: HeadersFunction = (headersArgs) => {
  return boundary.headers(headersArgs);
};
