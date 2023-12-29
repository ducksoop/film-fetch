const urlBuilder = (
  endpoint: string,
  parameters?: { [key: string]: string }
): string => {
  if (endpoint.indexOf('/') === 0) endpoint = endpoint.substring(1);

  const parsedParameters = new URLSearchParams({
    api_key: process.env.REACT_APP_TMDB_API_KEY ?? '',
    ...parameters,
  });

  return `https://api.themoviedb.org/3/${endpoint}?${parsedParameters}`;
};

export default urlBuilder;
