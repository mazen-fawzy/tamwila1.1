import "./video.css";

const VideoPage = () => {
  return (
    <div className="Video">
      <video controls>
        <source src="/tamwila.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPage;


