const About = () => {
  return (
    <div id="about-me" className="about">
      <h2>About Me</h2>
      <img
        className="profile-image"
        src={require('../assets/profileImage.jpeg')}
        alt="ProfilePhotp"
      ></img>
      <p>
        With 4+ years of hands-on experience in building scalable and
        high-performance web applications, I specialize in front-end development
        using Angular and React, along with strong proficiency in TypeScript,
        JavaScript, SCSS, and Bootstrap.
      </p>
      <p>
        I've worked on complex frontend projects, published Angular libraries to
        npm repositories, and contributed to backend development using Spring
        Boot.
      </p>
      <p>
        I am known for my ability to quickly grasp new concepts, solve problems
        pragmatically, and collaborate seamlessly within cross-functional teams.
        I adapt well to evolving requirements and am passionate about building
        clean, maintainable solutions that create real value.
      </p>
      <p>
        In my leisure time, I'm usually travelling, reading or hanging out with
        my friends.
      </p>
    </div>
  );
};

export default About;
