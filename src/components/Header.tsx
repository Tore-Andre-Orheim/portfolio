import Link from "next/link";
const Header = () => {
  return (
    <div>
      <div>
        <Link href="/home"><p>Tore Andre Orheim</p></Link>
      </div>
      <div>
        <nav className="">
          <div className="">
            <Link href="/about" className="">About</Link>
          </div>
          <div className="">
            <Link href="/projects" className="">My projects</Link>
          </div>
          <div className="">
            <Link href="/work" className="">Work</Link>
          </div>
          <div className="">
            <Link href="/contact" className="">Get in touch</Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;