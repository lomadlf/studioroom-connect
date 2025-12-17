import type { HeadersFunction, LoaderFunctionArgs } from "react-router";
import { authenticate } from "../shopify.server";
import { boundary } from "@shopify/shopify-app-react-router/server";

import {
  Page,
  Card,
  Text,
  Button,
  Badge,
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
      <BlockStack gap="400">
        <Card>
          <BlockStack gap="300">
            <Text as="p">
              StudioRoom Connect allows merchants to link their Shopify store
              with their StudioRoom account.
            </Text>

            <Text as="p" tone="subdued">
              Product images are processed externally on studioroom.fr.
              No product data is modified without explicit user action.
            </Text>

            <InlineStack gap="200">
              <Badge tone="success">Account connected</Badge>
            </InlineStack>

            <InlineStack gap="200">
              <Button
                variant="primary"
                url="https://studioroom.fr/dashboard"
                target="_blank"
              >
                Open StudioRoom
              </Button>

              <Button tone="critical">
                Disconnect account
              </Button>
            </InlineStack>

            <Text as="p" tone="subdued">
              You can disconnect your account at any time.
            </Text>
          </BlockStack>
        </Card>
      </BlockStack>
    </Page>
  );
}

export const headers: HeadersFunction = (headersArgs) => {
  return boundary.headers(headersArgs);
};
