import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <Spinner animation="border" variant="primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loading;
