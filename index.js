const Box = (props) => {
  const { className, message } = props;
  const containerClassName = `box ${className}`;
  return (
    <div className={containerClassName}>
      <p className="label">{message}</p>
    </div>
  );
};

const element = (
  <div className="box-container">
    <h1 className="title">Boxes</h1>
    <div className="box-size-container">
      <Box className="small-box" message="Small" />
      <Box className="medium-box" message="Medium" />
      <Box className="large-box" message="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
