import { ChangeEvent, useEffect, useState } from 'react';

import WatchProviderObject from '../types/WatchProviderObject';

import sortWatchProviders from '../utils/sortWatchProviders';
import translateCountryCode from '../utils/translateCountryCode';
import urlBuilder from '../utils/urlBuilder';

import WatchProvider from './WatchProvider';

import styles from '../styles/PlatformSelect.module.scss';

interface Props {
  movieId: number;
}

interface WatchProviderResult {
  id: number;
  results: WatchProviderObject;
}

const PlatformSelect = ({ movieId }: Props) => {
  const [watchProviders, setWatchProviders] = useState<WatchProviderObject>({});
  const [choosenCountry, setChoosenCountry] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const watchProvidersRequest = await fetch(
        urlBuilder(`/movie/${movieId}/watch/providers`)
      );
      const watchProviders: WatchProviderResult =
        await watchProvidersRequest.json();

      if (watchProvidersRequest.ok) {
        setWatchProviders(sortWatchProviders(watchProviders.results));
      }
    })();
  }, []);

  console.log(watchProviders);

  const chooseCountry = (e: ChangeEvent<HTMLSelectElement>) => {
    setChoosenCountry(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className={styles.watchSelector}>
      <div className={styles.countrySelector}>
        <label htmlFor='country'>Select country</label>
        <select id='country' onChange={chooseCountry} defaultValue='default'>
          <option disabled value={'default'}>
            Select country
          </option>
          {Object.keys(watchProviders).map((country) => (
            <option key={country} value={country}>
              {translateCountryCode(country) ?? 'onknown'}
            </option>
          ))}
        </select>
        <small>
          Data provided by <a href='https://justwatch.com'>JustWatch</a>
        </small>
      </div>
      {choosenCountry && (
        <div className={styles.platforms}>
          {watchProviders[choosenCountry].flatrate && (
            <div className={styles.watchOption}>
              <p>Stream</p>
              <div className={styles.platformList}>
                {watchProviders[choosenCountry].flatrate.map((provider) => (
                  <WatchProvider
                    key={provider.provider_id}
                    name={provider.provider_name}
                    logo={provider.logo_path}
                  />
                ))}
              </div>
            </div>
          )}
          {watchProviders[choosenCountry].rent && (
            <div className={styles.watchOption}>
              <p>Rent</p>
              <div className={styles.platformList}>
                {watchProviders[choosenCountry].rent.map((provider) => (
                  <WatchProvider
                    key={provider.provider_id}
                    name={provider.provider_name}
                    logo={provider.logo_path}
                  />
                ))}
              </div>
            </div>
          )}
          {watchProviders[choosenCountry].buy && (
            <div className={styles.watchOption}>
              <p>Buy</p>
              <div className={styles.platformList}>
                {watchProviders[choosenCountry].buy.map((provider) => (
                  <WatchProvider
                    key={provider.provider_id}
                    name={provider.provider_name}
                    logo={provider.logo_path}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PlatformSelect;
