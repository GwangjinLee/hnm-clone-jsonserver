import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'




const NaviBar = () => {
  
    const navigate = useNavigate();

    const menuList = [
        {name: '여성', link: '/'},
        {name: '남성', link: '/'},
        {name: '아동', link: '/'},
    ];
    const search = (e) => {
        
        if(e.key === 'Enter'){
            console.log('search keyword:', e.target.value);
            navigate(`/?q=${e.target.value}`);
        }
    };
    

    const gotoLogin = () => {
        console.log('gotoLogin');
        navigate('/login');
       
    };

 
  return (
    <div>
        <div>
            <div className='login-button' onClick={gotoLogin}>
                <FontAwesomeIcon icon={faUser}/>
                <div>로그인</div>
            </div>
        </div>
        <div className='nav-section'>
        <img width={100} src='https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1968-1999.png'></img>
        </div>
        <div className='menu-area'>
            <ul className='menu-list'>
            {menuList.map((menu, index) => {
                return (<li key={index}>{menu.name}</li>)
            })}
            </ul>    
        </div>
        <div className='search-box'>
            <FontAwesomeIcon icon={faSearch}/>
            <input type='text' placeholder='검색어를 입력하세요.' onKeyUp={(e)=>{search(e)}}/>
        </div>
    </div>
  )
}

export default NaviBar