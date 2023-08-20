import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Layout from "./components/layout";
import Index from './pages/index';

import './App.css';
import './styles/style.scss'

const App = () => {
  return (
      <>
        <Layout>
          <Router>
            <Routes>
              <Route path='/' exact={true} element={<Index />} />
            </Routes>
          </Router>
        </Layout>
      </>
  );
}

export default App;
