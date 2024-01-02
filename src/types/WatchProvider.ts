export default interface WatchProvider {
  link: string;
  flatrate: {
    display_priority: number;
    logo_path: string;
    provider_id: number;
    provider_name: string;
  }[];
  rent: {
    display_priority: number;
    logo_path: string;
    provider_id: number;
    provider_name: string;
  }[];
  buy: {
    display_priority: number;
    logo_path: string;
    provider_id: number;
    provider_name: string;
  }[];
}
