import './App.scss';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import SelectionCityContainer from './components/Search/SelectionCity/SelectionCityContainer';
import Loading from './components/Loading/Loading';
import WeatherCurrentCityContainer from './components/WeatherCurrentCity/WeatherCurrentCityContainer';
import PopularCityContainer from './components/PopularCity/PopularCityContainer';

const App = (props) => {

  return (
        <div className="App">
        <BrowserRouter>
          <div className='wrp'>
            <div>
              <SelectionCityContainer />
              <Routes>
                <Route path={`/`} element={<PopularCityContainer />} />
                <Route path={`/city/:par`} element={<WeatherCurrentCityContainer />} />
              </Routes>
            </div>
          </div>
          </BrowserRouter>
        </div >
  );
}


export default App;
