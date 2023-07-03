import path from 'path';

const fs = require('fs');

export default function fetchPsalmCache(passages: any): Psalms[] {
  const passageCache = [] as Psalms[];

  passages.forEach((x: string) => {
    try {
      const rawdata = fs.readFileSync(
        path.resolve(`src/data/psalms/${x}.json`)
      );

      if (rawdata) {
        console.log(`psalms ${x} exists`);
        const json = JSON.parse(rawdata);
        passageCache.push(json);
      }
    } catch (err) {
      console.log(`### psalms ${x} not found`);
    }
  });
  return passageCache;
}

export async function fetchPsalms(passages: any): Promise<Psalms> {
  let query = passages.join(',');
  if (typeof passages[0] === 'number') {
    query = `psalm+${passages.join(',+psalm+')}`;
  }
  console.log(query);
  const url = new URL('https://api.esv.org/v3/passage/html/');
  const search = new URLSearchParams({
    'include-audio-link': 'false',
    'include-footnotes': 'false',
    q: query,
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
