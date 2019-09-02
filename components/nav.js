import Link from 'next/link'

const Nav = () => (
  <div className={"header"}>

    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/players">
      <a>Players</a>
    </Link>

    <style jsx global>{`
    .header {
          position: absolute;
          height: 50px;
          display: flex;
          padding-left: 5vw;
        }
        a {
          color: white;
          align-self: center;
          margin: 0px 50px;
          font-size: larger;
          margin-right: 15px;
        }
        a:hover {
          text-decoration: none;

        }
    `}</style>
  </div>
)

export default Nav
