import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Container, LogoutBtn, Logo } from './../index'

const Header = () => {

  const authStatus = useSelector((state) => state.auth.status)

  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]

  return (
    <header>
      <Container>
        <nav className='flex justify-between items-center'>
          <div >
            <Link to='/'>
              <img className='w-20 h-20' src={Logo} alt="" />
            </Link>
          </div>

          <div>
            <ul className='flex ml-auto'>
              {navItems.map((item) => (
                item.active ? (
                  <li
                    key={item.slug}
                  >
                    <button
                      onClick={() => navigate(item.slug)}
                      className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                    >{item.name}</button>
                  </li>
                ) : (null)
              ))}

              {
                authStatus && (
                  <li>
                    <LogoutBtn />
                  </li>
                )
              }
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  )
}

export default Header