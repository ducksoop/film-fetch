import WatchProviderObject from '../types/WatchProviderObject';

import translateCountryCode from './translateCountryCode';

const sortWatchProviders = (watchProviders: WatchProviderObject): WatchProviderObject => {
  return Object.keys(watchProviders)
    .sort((a: string, b: string): number => {
      const aName = translateCountryCode(a) ?? '';
      const bName = translateCountryCode(b) ?? '';

      return aName.localeCompare(bName);
    })
    .reduce((obj, key) => {
      (obj as WatchProviderObject)[key as keyof WatchProviderObject] =
        watchProviders[key];
      return obj;
    }, {});
};

export default sortWatchProviders;
