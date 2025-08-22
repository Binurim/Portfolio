const MainContent = () => {
  return (
    <div className="main-content">
      Coming Soon{' '}
      <span>
        <div
          className="spinner-grow spinner-grow-sm text-info"
          role="status"
          style={{ width: '0.7rem', height: '0.7rem' }}
        ></div>
      </span>
    </div>
  );
};

export default MainContent;
