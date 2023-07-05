import './App.css';
import Comments from './component/Comments/Comments';
import Counter from './component/Counter/Counter';
import Counter2 from './component/Counter2/Counter2.jsx'
import Post from './component/Post/Post';
import {Route, Routes } from 'react-router-dom'
import Dynamic from './component/Dynamic/Dynamic';
import NotFound from './component/notFound/NotFound';
import Posts from "./component/Posts/Posts";
import Header from "./component/Header/Header";

export const PATHS = {
  counter: '/Counter',
  counter2: '/Counter2',
  comments: 'comments',
  dynamic: '/:number',
  notFound: '*',
    posts:'/posts',
    post:'/posts/:id'
}

function App() {
  return (
    <div className="App">
        <Header/>
      <Routes>
            <Route path={PATHS.posts} element={<Posts/>}/>
          <Route path={PATHS.counter} element={<Counter/>}/>
          <Route path={PATHS.post} element={<Post/>}/>


        </Routes>
    </div>
  );
}

export default App;
