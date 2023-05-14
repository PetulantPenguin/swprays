export async function fetchPsalms(passages: any) {
  const url = new URL('https://api.esv.org/v3/passage/html/');
  const search = new URLSearchParams({
    'include-audio-link': 'false',
    'include-footnotes': 'false',
    q: `psalm+${passages.join(',+psalm+')}`,
  });
  url.search = search.toString();

  const response = await fetch(url.href, {
    headers: new Headers({
      Authorization: 'Token d6eaa53c4ba338d11c33df8faa60e825e2a213c2',
    }),
  });
  return response.json();
}

export async function fetchPsalmsQuery({ queryKey }: { queryKey: any }) {
  const [, passages = []] = queryKey;
  return fetchPsalms(passages);
}
