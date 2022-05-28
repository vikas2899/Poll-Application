import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userLogout } from '../features/user/userLoginSlice'
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mobile } from '../responsive';
import MenuIcon from '@mui/icons-material/Menu';

const Container = styled.div`
    height: 60px;
    background-color: black;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
`;

const Left = styled.div`
    color: white;
    flex: 0.5;
    padding-top: 20px;
    text-align: center;
    position: relative;
`;

const Center = styled.div`
      color: white;
      flex: 3;
      padding-top: 7px;
      ${mobile({
          display: "none"
      })}
`;

const Right = styled.div`
      color: white;
      flex: 2;
      padding-top: 20px;
      ${mobile({
          display: "none"
      })}
`;

const SearchBarContainer = styled.div`
    border: 1px solid white ;
    display: flex;
    align-items: center;
    background: white;
    height : 45px;
    border-radius : 3px
`;

const Input = styled.input`
    border: none;
    width: 98%;
    margin: 7px;
    font-size: 18px;
    &:focus  {
        outline : none;
    }
`;

const MenuItemWrapper = styled.div`
    display : flex;
    justify-content: space-around;
`;

const MenuItem = styled.div`
    cursor: pointer;
`;

const LogoWrapper = styled.div`
    cursor: pointer;
`;

const Logo = styled.div`
    font-size: 20px;
`;

const MenuIconContainer = styled.div`
    position: absolute;
    top: 45%;
    right: -80px;
`;

const ToggleMenu = styled.div`
    background: black;
    margin-top: 11px;
    color: white;
    display: none;
    @media (max-width: 480px) {
        display: ${props => props.isActive ? "block" : "none"}
    };
`;

const MenuList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const MenuListItem = styled.li`
    list-style: none;
    margin-top: 5px;
    margin-bottom: 12px;
`;


function Navbar() {

    const [isActive, setActive] = useState(false);

    const user = useSelector((state) => {
        return state.userLogin.currentUser
    });

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(userLogout())
    }

    const handleToggle = () => {
        setActive(!isActive);
    }

  return (
    <Container>
        <Wrapper>
              <Left>
                  <LogoWrapper>
                      <Logo>
                          <Link to={{ pathname: "/" }} style={{ textDecoration: "none", color: "white" }}>POLL.</Link>
                      </Logo>
                  </LogoWrapper>
                  <MenuIconContainer onClick={handleToggle}>
                        <MenuIcon />
                  </MenuIconContainer>
            </Left>
              <Center>
                  <SearchBarContainer>
                    <Input placeholder='Search for active polls'/>
                      <SearchIcon style={{ color: 'black', fontSize: 35, cursor: 'pointer' }} />
                  </SearchBarContainer>
            </Center>
            <Right>
                  <MenuItemWrapper>
                      <MenuItem>
                          {user
                              ? 
                              null
                              : 
                              <Link to={{ pathname: "/login" }} style={{textDecoration: "none", color: "white"}}>Login</Link> 
                          }
                      </MenuItem>
                      <MenuItem>
                          {user
                              ? 
                            <Link
                                  to={{ pathname: "/" }}
                                  style={{ textDecoration: "none", color: "white" }}
                                  onClick={handleLogout}>Logout</Link>
                          :
                            <Link to={{ pathname: "/register" }} style={{ textDecoration: "none", color: "white" }}>Register</Link>
                          }
                      </MenuItem>
                      <MenuItem>
                          <Link to={{ pathname: "/about" }} style={{ textDecoration: "none", color: "white" }}>About</Link>
                      </MenuItem>
                  </MenuItemWrapper>
              </Right>
          </Wrapper>
          <ToggleMenu isActive={isActive}>
                  <MenuList>
                      <MenuListItem>
                          {user
                              ? 
                              null
                              : 
                              <Link to={{ pathname: "/login" }} style={{textDecoration: "none", color: "white"}}>Login</Link> 
                          }
                      </MenuListItem>
                      <MenuListItem>
                          {user
                              ? 
                            <Link
                                  to={{ pathname: "/" }}
                                  style={{ textDecoration: "none", color: "white" }}
                                  onClick={handleLogout}>Logout</Link>
                          :
                            <Link to={{ pathname: "/register" }} style={{ textDecoration: "none", color: "white" }}>Register</Link>
                          }
                      </MenuListItem>
                  </MenuList>
          </ToggleMenu>
    </Container>
  )
}

export default Navbar
