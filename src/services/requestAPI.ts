type Props = {
  method: string;
  endpoint: string;
  params?: string;
  body?: BodyInit;
  headers?: HeadersInit;
};

async function requestAPI({ method, endpoint, params, body, headers }: Props) {
  const raw = JSON.stringify(body);
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}${endpoint}?apiKey=${process.env.NEXT_PUBLIC_APIKEY}&${params}`;

  let res;

  const setBody = (): RequestInit => {
    if (body) {
      return {
        method,
        body: raw,
        headers,
      };
    } else {
      return { method, headers };
    }
  };

  try {
    console.log("Try Fetching API");

    const response = await fetch(url, setBody());

    console.log(response);
    res = await response.json();
  } catch (error) {
    console.log("Catch Error in Fetching API", error);
  }

  console.log(url, "URL");
  console.log(body, headers, "config");

  console.log("Final Result: ", res);

  return res;
}

export default requestAPI;
