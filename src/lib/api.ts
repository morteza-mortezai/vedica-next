const BASE_URL = process.env.API_BASE_URL || "https://api.example.com";

// Helper function to build URL with query parameters
function buildUrl(path: string, query?: Record<string, any>): string {
  const url = new URL(`${BASE_URL}${path}`);
  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.append(key, String(value));
      }
    });
  }
  return url.toString();
}

type RequestOptions = {
  body?: any;
  query?: Record<string, any>;
  headers?: HeadersInit;
  cache?: RequestInit["cache"];
};

export const api = {
  async request<T>(
    method: string,
    path: string,
    { body, query, headers, cache }: RequestOptions = {}
  ): Promise<T> {
    const url = buildUrl(path, query);

    const options: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      cache: cache ?? "no-store", // Dynamic caching: override with custom value if provided
    };

    if (body) {
      options.body = JSON.stringify(body);
    }
    const res = await fetch(url, options);

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`API Error: ${res.status} ${res.statusText} - ${errorText}`);
    }

    return res.json();
  },

  get<T>(
    path: string,
    query?: Record<string, any>,
    headers?: HeadersInit,
    cache?: RequestInit["cache"]
  ): Promise<T> {
    return this.request<T>("GET", path, { query, headers, cache });
  },

  post<T>(
    path: string,
    body: any,
    query?: Record<string, any>,
    headers?: HeadersInit,
    cache?: RequestInit["cache"]
  ): Promise<T> {
    return this.request<T>("POST", path, { body, query, headers, cache });
  },

  put<T>(
    path: string,
    body: any,
    query?: Record<string, any>,
    headers?: HeadersInit,
    cache?: RequestInit["cache"]
  ): Promise<T> {
    return this.request<T>("PUT", path, { body, query, headers, cache });
  },

  delete<T>(
    path: string,
    query?: Record<string, any>,
    headers?: HeadersInit,
    cache?: RequestInit["cache"]
  ): Promise<T> {
    return this.request<T>("DELETE", path, { query, headers, cache });
  },
};
