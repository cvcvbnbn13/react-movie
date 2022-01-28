import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

import { BrowserRouter, Route } from 'react-router-dom';

import Header from './component/header';
import Footer from './component/footer';
import Router from './config/Router';

function App() {
  return (
    <BrowserRouter>
      <Route
        render={(props: any) => (
          <>
            <Header {...props} />
            <Router />
            <Footer />
          </>
        )}
      />
    </BrowserRouter>
  );
}

export default App;
