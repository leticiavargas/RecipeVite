import './styles.css';

import { Header } from '../../components'
import { Outlet } from 'react-router-dom';

const Home = () => {
  return(
    <main className='homeContainer'>
      <Header />
      <section>
        <Outlet />
      </section>
    </main>
  )
}

export default Home;