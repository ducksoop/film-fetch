interface Props {
  name: string;
  logo: string;
}

const WatchProvider = ({ name, logo }: Props) => {
  return (
    <div className={'provider'}>
      <img alt={name} src={`https://image.tmdb.org/t/p/w45${logo}`} />
    </div>
  );
};

export default WatchProvider;
