import ReactPlayer from 'react-player';

// import screenfull from 'screenfull';

const AppPlayer = () => {
  return (
    <div className="playerDiv">
      <ReactPlayer
        width="100%"
        height="100%"
        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
        playing
        muted
      />
    </div>
  );
};

export default AppPlayer;
