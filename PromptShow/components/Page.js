import React from 'react'
import AuthContext from './AuthContext'
import Meta from './Meta'
import Header from './Header'
import Footer from './Footer'
import Announcement from './Announcement'
import LoginButton from './LoginButton'

const COLUMN = `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
class Page extends React.Component {
  render() {
    const { children, enableHeroText, flex } = this.props
    return (
      <main className="main mb3">
        <Meta />
        <AuthContext>
          <Announcement />
          <a href="https://www.langgpt.ai" className="langgpt-link" target="_blank" rel="noopener noreferrer">
          Visit LangGPT.ai
          </a>
          <Header enableHeroText={enableHeroText} />
          <div className="login-button-container">
            <LoginButton />
          </div>

          <div className="page">{children}</div>
        </AuthContext>

        <Footer />


        <style jsx>
          {`
            .main {
              ${flex ? COLUMN : ''}
              margin-top: 6rem;
            }
            /* 在您的应用的全局样式文件中或者使用 <style> 标签 */
            .langgpt-link {
              position: absolute;
              top: 1.4rem;
              left: 1rem;
              padding: 8px 16px;
              background-color: #007BFF;
              color: white;
              text-decoration: none;
              border-radius: 4px;
              margin-right: 20px; /* 添加间距确保不与其他元素重叠 */
            }
            .login-button-container {
              position: absolute;
              top: 1.4rem;
              right: 1rem;
            }
            .page {
              max-width: 100%;
              padding: 0 1rem;
            }
            @media (min-width: 1024px) {
              .main {
                ${COLUMN};
              }
              .page {
                padding: 0;
              }
            }
          `}
        </style>
        
      </main>
    )
  }
}

export default Page
