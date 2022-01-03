import './Header.css'

export default ({black}) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
      <a href="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Minha Figura"/>
      </a>
      </div>
      <div className="header--user">
          <a href="/">
            <img src="https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png" alt="usuario"/>
          </a>
      </div>
    </header>
  )
}
