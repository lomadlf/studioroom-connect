import "@shopify/polaris/build/esm/styles.css";

import { renderToString } from "react-dom/server";
import { ServerRouter } from "react-router";
import { type EntryContext } from "react-router";
import { addDocumentResponseHeaders } from "./shopify.server";

export default function handleRequest(
  request: Request,
  status: number,
  headers: Headers,
  context: EntryContext
) {
  addDocumentResponseHeaders(request, headers);

  const html = renderToString(
    <ServerRouter context={context} url={request.url} />
  );

  headers.set("Content-Type", "text/html");

  return new Response("<!DOCTYPE html>" + html, {
    status,
    headers,
  });
}