import { ChangeEvent, useEffect, useState } from 'react';

import WatchProvider from '../types/WatchProvider';
import WatchProviderObject from '../types/WatchProviderObject';

import translateCountryCode from '../utils/translateCountryCode';
import urlBuilder from '../utils/urlBuilder';

import styles from '../styles/PlatformSelect.module.scss';

import React from 'react';

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
        setWatchProviders(watchProviders.results);
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
      </div>
      {choosenCountry && (
        <div className={styles.platforms}>
          {watchProviders[choosenCountry].flatrate && (
            <div className={styles.stream}>
              <p>Stream</p>
              <div className={styles.platformList}>
                {watchProviders[choosenCountry].flatrate.map((provider) => (
                  <div className={styles.provider} key={provider.provider_id}>
                    <img
                      src={`https://image.tmdb.org/t/p/w45${provider.logo_path}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          {watchProviders[choosenCountry].rent && (
            <div className={styles.rent}>
              <p>Rent</p>
              <div className={styles.platformList}>
                {watchProviders[choosenCountry].rent.map((provider) => (
                  <div className={styles.provider} key={provider.provider_id}>
                    <img
                      src={`https://image.tmdb.org/t/p/w45${provider.logo_path}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          {watchProviders[choosenCountry].buy && (
            <div className={styles.buy}>
              <p>Buy</p>
              <div className={styles.platformList}>
                {watchProviders[choosenCountry].buy.map((provider) => (
                  <div className={styles.provider} key={provider.provider_id}>
                    <img
                      src={`https://image.tmdb.org/t/p/w45${provider.logo_path}`}
                    />
                  </div>
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
