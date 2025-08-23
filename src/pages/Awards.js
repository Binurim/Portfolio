const Awards = () => {
  const awardsData = [
    { id: 1, title: 'Top Talent FY 2025' },
    { id: 2, title: 'Senior Front end developer certification in React' },
    { id: 3, title: 'Top Talent FY 2023' },
  ];

  return (
    <div className="awards" id="awards">
      <h2>Awards & Certificatiossn</h2>
      <br />
      <ul>
        {awardsData.map((award) => (
          <>
            <div className="card glass-card" key={award.id}>
              <div className="card-body">
                <li>{award.title}</li>
              </div>
            </div>
            <br />
          </>
        ))}
      </ul>
    </div>
  );
};

export default Awards;
