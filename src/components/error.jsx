const Error = ({ error }) => {
  return <>{error && <p style={{ color: "red" }}>{error}</p>}</>;
};

export default Error;
