const Awards = () => {
  const awardsData = [
    {
      id: 1,
      title: "Top Talent FY 2025",
      link: "https://drive.google.com/file/d/18wi7WxaDPzmV08MGd2d6Pfje5MjmR7Bm/view",
    },
    {
      id: 2,
      title: "Senior Front end developer certification in React",
      link: "https://drive.google.com/file/d/1E_iV5RTI3AzmMq7Zw6nNtgbUX1yZcKfR/view",
    },
    {
      id: 3,
      title: "User Experience Design & User Interface Design Fundamentals",
      link: "https://www.udemy.com/certificate/UC-64589ef5-bc57-4f51-9b46-873d5a06c29f/",
    },
    {
      id: 4,
      title: "Top Talent FY 2023",
      link: "https://drive.google.com/file/d/1e2j6P-xjKr2-MShojY9dxguKgkXVkSUl/view",
    },
    {
      id: 5,
      title: "Bravo Individual Award - 2023",
      link: "https://drive.google.com/file/d/1rcucVpmqEKrYk-Wbm8P4bPOX8YyoYuwL/view",
    },
    {
      id: 6,
      title: "Bravo Team Award - 2022",
      link: "https://drive.google.com/file/d/1lYxyRdkdVgEYQx4yJ92y9JPCFJJzZKwl/view",
    },
  ];

  // const archives = [
  //   { id: 7, title: "Foundations of User Experience (UX) Design" },
  //   { id: 8, title: "Participated in Pearson Data Hack - 2019" },
  //   {
  //     id: 9,
  //     title:
  //       " HACKAHOLICS 3.0 - Selected for Top 15 finalists- 2019 - Girls only hackathon organized by IEEE WIE Affinity Group of UCSC",
  //   },
  //   {
  //     id: 10,
  //     title:
  //       "Woman' Up Crossing the hurdles Video Competition 4 th place - Organized by IEEE WIE Affinity Group of Wayamba University -2018",
  //   },
  //   { id: 11, title: "Participated in IEEEXtreme 12.0 - 2018" },
  //   { id: 12, title: "Participated in IEEEXtreme 11.0 - 2017" },
  //   { id: 13, title: "HACKAHOLICS 2.0 - 4 th place - 2017" },
  // ];

  return (
    <div id="awards" className="section">
      <div className="sectionHeader">
        <h2 className="sectionTitle">Awards & Certification</h2>
      </div>
      {awardsData.map((award) => (
        <div key={award.id}>
          <a
            className="card-link"
            href={award.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card glass-card">
              <div className="card-body">
                <h6 className="card-title">{award.title}</h6>
              </div>
            </div>
          </a>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Awards;
