import nayanaImage from "../assets/nayana.jpg"

const Home = () => {
  return (
<section id="home" className="home">
      <div className="home-content">
        <div className="home-text">
          <h1>Hi, I'm Nayana M P 👋</h1>
          <p>React & TypeScript Developer</p>

        </div>

        <div className="home-image">
          <img src={nayanaImage} alt="Nayana" />
        </div>
      </div>
    </section>
  )
}

export default Home
