import './App.css';
import instance from './componets/instance';
import Row from './componets/Row';
import requests from './componets/requests';
import Banner from './componets/Banner';
import Nav from './componets/Nav';



function App() {
  return (
    <div className="App">
      <Banner/>
      <Nav/>
     <Row title="Netflix Orginals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
     <Row title="Trendings" fetchUrl={requests.fetchTrending}/>
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
     <Row title="Romance" fetchUrl={requests.fetchRomanceMovies}/>
     <Row title="Horror" fetchUrl={requests.fetchHorrorMovies}/>
     <Row title="Action" fetchUrl={requests.fetchActionMovies}/>
     <Row title="Comedy" fetchUrl={requests.fetchComedyMovies}/>
     <Row title="Documentries" fetchUrl={requests.fetchDocumentaries}/>
      </div>
  );
}

export default App;
