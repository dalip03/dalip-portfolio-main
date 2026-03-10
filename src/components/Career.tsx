import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>Rocky Mountain Technologies India Pvt. Ltd</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Developed 2+ applications using React.js, focusing on building
              responsive and user-friendly interfaces. Implemented modern UI/UX
              practices and designed wireframes and layouts using Figma.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior Software Developer</h4>
                <h5>Cognizant </h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Worked as a Junior Software Developer at Cognizant, contributing
              to the development of enterprise web applications using ASP.NET
              MVC and C#. Implemented application features, optimized existing
              code, and collaborated with cross-functional teams to deliver
              scalable solutions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Freelance</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Built and delivered client websites using React.js, Next.js, and
              Tailwind CSS, focusing on responsive design, modern UI/UX, and
              high-performance web experiences. Successfully delivered
              production-ready solutions tailored to client requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
