const Awards = () => {
  const awardsData = [
    { id: 1, title: 'Top Talent FY 2025' },
    { id: 2, title: 'Senior Front end developer certification in React' },
    { id: 3, title: 'Top Talent FY 2023' },
  ];

  return (
    <div className="awards" id="awards">
      <h3>Awards & Certification</h3>
      {awardsData.map((award) => (
        <div key={award.id}>
          <div className="card glass-card">
            <div className="card-body">
              <h6 className="card-title">{award.title}</h6>
            </div>
          </div>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Awards;
