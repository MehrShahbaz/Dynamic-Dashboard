import DashBoard from '../components/DashBoard/DashBoard';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';

const HomePage = (): JSX.Element => (
  <div>
    <NavBar />
    <DashBoard />
    <Footer />
  </div>
);

export default HomePage;
