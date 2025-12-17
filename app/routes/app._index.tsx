import type { HeadersFunction, LoaderFunctionArgs } from "react-router";
import { authenticate } from "../shopify.server";
import { boundary } from "@shopify/shopify-app-react-router/server";

import {
  Page,
  Layout,
  Text,
  Badge,
  Button,
  InlineStack,
  BlockStack,
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
          <BlockStack gap="400">
            <Text variant="bodyMd">
              StudioRoom Connect allows merchants to link their Shopify store
              with their StudioRoom account.
            </Text>

            <Text variant="bodySm" tone="subdued">
              Product images are processed externally on studioroom.fr.
            </Text>

            <InlineStack gap="200">
              <Badge tone="success">Account connected</Badge>
            </InlineStack>

            <InlineStack gap="200">
              <Button
                variant="primary"
                url="https://studioroom.fr/dashboard"
                external
              >
                Open StudioRoom
              </Button>

              <Button tone="critical">
                Disconnect account
              </Button>
            </InlineStack>
          </BlockStack>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

export const headers: HeadersFunction = (headersArgs) => {
  return boundary.headers(headersArgs);
};