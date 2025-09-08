// Minimal query string stringifier: joins key-value pairs
export function stringifyQueryParams(queryParams) {
  const strings = [];

  Object.entries(queryParams).forEach(([key, value]) => {
    if (!value) return;
    if (Array.isArray(value)) {
      value.forEach((v) => {
        if (v)
          strings.push(`${encodeURIComponent(key)}=${encodeURIComponent(v)}`);
      });
    } else {
      strings.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
    }
  });

  const qs = strings.join("&");

  return qs;
}
