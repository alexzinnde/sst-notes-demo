export async function handler(event) {
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/html" },
    body: `<html>Hello, World! Your request was received at ${event.requestContext.time}.
    <h1>I am here</h1></html>`,
  };
}
