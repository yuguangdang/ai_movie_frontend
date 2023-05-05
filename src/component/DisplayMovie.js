import YouTube from 'react-youtube';

export default function DisplayMovie() {
  const opts = {
    height: '1024',
    width: '1024',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
    <div>DisplayMovie</div>
    <YouTube videoId={"pvuAXWHhcI4"} opts={opts} />
    </>
  )
}
