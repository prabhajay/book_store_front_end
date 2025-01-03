import Banner from './Banner';
import News from './News';
import Recommened from './Recommend';
import TopSellers from './Topsellers';
const Home = () => {
  return (
    <div>
      <Banner />
      <TopSellers />
      <Recommened />
      <News />
    </div>
  )
}

export default Home