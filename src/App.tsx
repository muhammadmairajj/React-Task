import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataFetchAndDisplay from './DataFetchAndDisplay';
// import CompareTwoAPIData from './CompareTwoAPIData';
// import SortingData from './AscendingAndDescendingSorting';
// import Student1 from './HOC/Student1';
// import Student2 from './HOC/Student2';
// import ReactHookForm from './ReactHookForm';
// import Home from './I18NextTranslator/Home';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import About from './I18NextTranslator/About';
// import Contact from './I18NextTranslator/Contact';
// import Dashboard from './I18NextTranslator/Dashboard';
// import Menu from './I18NextTranslator/Menu';
// import ParentComponent from './ChildToParentDataPass/ParentComponent';
// import DynamicInputForm from './DynamicAddAndRemoveInputBox';
// import Data from './JsonFormatData';
// import ComponentA from './ContextAPIExamples/ComponentA';
// import SearchFilter from './SearchFilter';
// import PostDataProvider from './context';

function App() {
  return (
    <div className="App">

      <DataFetchAndDisplay />
      {/* <CompareTwoAPIData /> */}
      
      {/* HOC Part Start */}
        {/* <Student1 />
        <Student2 /> */}
      {/* HOC Part ENd */}



      {/* <SortingData /> */}
      {/* <ReactHookForm /> */}
      {/* <DynamicInputForm /> */}
      {/* <ParentComponent /> */}
      {/* <BrowserRouter>
      <Menu />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/contact' element={ <Contact /> } />
          <Route path='/dashboard' element={ <Dashboard /> } />
        </Routes>
      </BrowserRouter> */}
      {/* <Data /> */}
      {/* <PostDataProvider>
      <ComponentA />
      </PostDataProvider> */}
      {/* <SearchFilter /> */}
    </div>
  );
}

export default App;
