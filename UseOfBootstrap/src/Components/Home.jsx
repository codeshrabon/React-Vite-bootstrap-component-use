import { useNavigate } from "react-router-dom";


function Home() {

    const navigateHome = useNavigate()
    const navigateToExpriment = useNavigate()
    const navigateToImage = useNavigate

    const BackToHome = () => {
        navigateHome("/")
    }
    const goToExpriment = () => {
        navigateToExperiment("/experiment")
    }
return (
<div className="container">
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" >
          Testing
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={BackToHome}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                
              <a className="nav-link active" aria-current="page" href="#" >
                Home
              </a>
              
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={goToExpriment}>
                Experiment
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                ImageShapeSection
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                TextFeatures
              </a>
            </li>
          </ul>
          <span className="navbar-text">Navbar text with an inline element</span>
        </div>
      </div>
    </nav>
    <div className="p-3">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam,
        impedit, quidem ex facilis labore quisquam, quasi odio ut iste voluptate
        eveniet ratione accusantium nisi dolorum. Quaerat obcaecati itaque
        asperiores eveniet!
      </p>
    </div>
  </div>
);
}

export default Home
