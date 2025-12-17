import type { HeadersFunction, LoaderFunctionArgs } from "react-router";
import { authenticate } from "../shopify.server";
import { boundary } from "@shopify/shopify-app-react-router/server";

import {
  Page,
  Layout,
  Text,
  Stack,
  Badge,
  Button,
} from "@shopify/polaris";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await authenticate.admin(request);
  return null;
};

export default function Index() {
  return (
    <Page title="StudioRoom Connect">
      <Layout>
        <Layout.Section>
          <Text as="p">
            StudioRoom Connect allows merchants to link their Shopify store
            with their StudioRoom account.
          </Text>

          <Text as="p" tone="subdued">
            Product images are processed externally on studioroom.fr.
          </Text>

          <Stack inline>
            <Badge tone="success">Account connected</Badge>
          </Stack>

          <Stack inline gap="200" style={{ marginTop: "1rem" }}>
            <Button
              variant="primary"
              url="https://studioroom.fr/dashboard"
              external
            >
              Open StudioRoom
            </Button>

            <Button tone="critical">Disconnect account</Button>
          </Stack>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

export const headers: HeadersFunction = (headersArgs) => {
  return boundary.headers(headersArgs);
};
