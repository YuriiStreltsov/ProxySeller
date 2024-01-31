export async function requestHandler<TResponse>(
  url: string,
  config: RequestInit = {}
): Promise<TResponse> {
  const response = await fetch(url, config);

  if (!response.ok) {
    throw new Error("Bad fetch response");
  }
  return response.json().catch(() => ({}));
}
