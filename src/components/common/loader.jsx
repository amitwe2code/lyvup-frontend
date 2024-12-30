// eslint-disable-next-line react/prop-types
const Loader = ({ size = "40px", color = "#3498db", speed = "1s" }) => {
  const loaderStyle = {
    width: size,
    height: size,
    border: `4px solid #f3f3f3`, // Light grey
    borderTop: `4px solid ${color}`, // Primary color
    animation: `spin ${speed} linear infinite`,
  };

  return (
    <div className="loader-overlay">
      <div className="loader" style={loaderStyle}></div>
    </div>
  );
};

export default Loader;
