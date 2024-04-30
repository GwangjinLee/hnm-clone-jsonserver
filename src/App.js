import { createBrowserRouter, Outlet, RouterProvider, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import Login from './page/Login';
import NaviBar from './component/NaviBar';
import PrivateRoute from './route/PrivateRoute';



//1. 전체상품페이지, 로그인, 상품상세페이지.
//1-1. 네비게이션 바 만들기.
//2. 상품상세페이지에서 전체상품을 볼수 있다.
//3. 로그인 버튼을 누르면 로그인 페이지로 이동한다.
//3. 상품상세페이지에서 로그인이 안되어 있으면 로그인 페이지로 이동한다.
//4. 로그인이 되어 있는 경우 상품 데이테일 페이지를 볼수 있다.
//5. 로그아웃 버튼을 클릭하면 로그아웃된다.
//5. 로그아웃된 경우 로그인 페이지로 이동한다.
//6. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.
//7. 상품을 검색할수 있다.
function App() {

  
  const [authenticated, setAuthenticated] = useState(false);

  const Root = ()=>{
    
    const navigate = useNavigate();
    useEffect(() => {
      console.log('authenticated', authenticated);
      if(authenticated) navigate('/');
      
    }, [authenticated]);

    return (
      <div>
        <NaviBar />
        <Outlet/>
      </div>
    )
  };
  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
          index: true,
          element: <ProductAll/>,
        },
        {
          path: "products/:id",
          element: <PrivateRoute authenticated={authenticated}/>,
        },
        {
          path: "login",
          element: <Login setAuthenticated={setAuthenticated}/>,
        },
      ]
    },
    
  ]);
  
  return (
      <RouterProvider router={router}/>
  );
}

export default App;
