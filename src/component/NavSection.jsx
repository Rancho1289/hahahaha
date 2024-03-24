import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faSpinner, faCamera, faUser, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const NavSection = () => {

  const menuList = ["여성", "Divided", "남성", "신생아/유아", "아동", "H&M HOME", "Sale", "지속가능성"]
  let navigate = useNavigate()
  const searchNav = (e) => {
    if (e.key === "Enter") {
      // 현재 페이지를 홈페이지 URL로 변경합니다.
      console.log("TEST", e.target.value)
      // window.location.href = `/?q=${e.target.value}`;
      navigate(`/?q=${e.target.value}`)
      e.target.value = ""
    }
  }

  return (
    <div>
      <div className='nav-LoginSection'>
        <FontAwesomeIcon icon={faUser} width={20} />
        로그인
      </div>
      <div className='nav-Logo'>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png"
          alt="Logo"
          width={125} />
      </div>

      <div className='menu-List'>
        <Container>
          <div md={1} xs={12} className='Nav-SearchSection'>
            <input type="text" placeholder='Search' onKeyDown={(e) => searchNav(e)} />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <Row className='TEST'>

            {menuList.map((menu, index) => <Col md={1} xs={12} key={index}><Button variant="secondary" size="sm">
              {menu}
            </Button></Col>)}
          </Row>
        </Container>

      </div>
    </div>
  )
}

export default NavSection
