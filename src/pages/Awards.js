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
      link: "https://media.licdn.com/dms/image/v2/D5622AQGdmPgGMZLNFg/feedshare-shrink_1280/feedshare-shrink_1280/0/1704470089199?e=1759363200&v=beta&t=p9z8dLPCoGJBLgFK7_G38Iir7FidIzKvnFVylagVNYA",
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
      link: "https://media.licdn.com/dms/image/v2/D5622AQFIQHdAXmF6HQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1680535434148?e=1759363200&v=beta&t=wc1AgC4fzVCWvMnojSLE20811zrky9dZX3IwXjIBzgU",
    },
    {
      id: 6,
      title: "Bravo Team Award - 2022",
      link: "https://media.licdn.com/dms/image/v2/C4E22AQHWuKRoMRmkhA/feedshare-shrink_1280/feedshare-shrink_1280/0/1649176349205?e=1759363200&v=beta&t=-3csOm-rzAbDQQmx6zAkVM2-7_q7mehaN_W-4EueJKA",
    },
  ];

  const archives = [
    { id: 7, title: "Foundations of User Experience (UX) Design" },
    { id: 8, title: "Participated in Pearson Data Hack - 2019" },
    {
      id: 9,
      title:
        " HACKAHOLICS 3.0 - Selected for Top 15 finalists- 2019 - Girls only hackathon organized by IEEE WIE Affinity Group of UCSC",
    },
    {
      id: 10,
      title:
        "Woman' Up Crossing the hurdles Video Competition 4 th place - Organized by IEEE WIE Affinity Group of Wayamba University -2018",
    },
    { id: 11, title: "Participated in IEEEXtreme 12.0 - 2018" },
    { id: 12, title: "Participated in IEEEXtreme 11.0 - 2017" },
    { id: 13, title: "HACKAHOLICS 2.0 - 4 th place - 2017" },
  ];

  return (
    <div className="awards" id="awards">
      <h3>Awards & Certification</h3>
      {awardsData.map((award) => (
        <div key={award.id}>
          <a className="card-link" href={award.link} target="_blank" rel="noopener noreferrer">
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
