import './App.css';
import Comments from './component/Comments/Comments';
import Counter from './component/Counter/Counter';
import Counter2 from './component/Counter2/Counter2.jsx'
import Post from './component/Post/Post';
import {Navigate, Route, Routes} from 'react-router-dom'
import Dynamic from './component/Dynamic/Dynamic';
import NotFound from './component/notFound/NotFound';
import Posts from "./component/Posts/Posts";
import Header from "./component/Header/Header";
import MUI from "./component/MUI/MUI";
import Layout from "./component/Layout/Layout";

export const PATHS = {
  counter: '/Counter',
  counter2: '/Counter2',
  comments: 'comments',
  dynamic: '/:number',
  notFound: '*',
    posts:'/posts',
    post:':id',
    mui:'/mui'

}

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/admin" element={<Navigate to="/" replace={true}  />} />
            <Route path={PATHS.posts} >
                <Route index element={<Posts/>}/>
                <Route path={PATHS.post} element={<Post/>}/>
            </Route>
          <Route path={PATHS.mui} element={<MUI/>}/>



        </Routes>
    </div>
  );
}

export default App;
