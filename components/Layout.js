import Link from "next/link";
import { useRouter } from "next/router";
export default function Layout({ children }) {
  const { pathname } = useRouter();
  const isRoot = pathname === "/";

  const header = (
    <header className="text-gray-500 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link  href="/">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
        <svg className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
          <span className="ml-3 text-xl">Freeman's blog</span>
        </a>
        </Link>
        
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="https://snow-blade.github.io/portfolio/" className="mr-5 hover:text-white">About</a>
          <a href="https://twitter.com/tweepcoder" className="mr-5 hover:text-white">Twitter</a>
          <a href="https://github.com/snow-blade/"className="mr-5 hover:text-white">Github</a>
          <a href= "https://dev.to/jujue"className="mr-5 hover:text-white">dev.to</a>
        </nav>
      </div>
    </header>
  /* This is the old template of the blog, please remove if you don't need it */  /* <h1 className="mb-8">
      <Link href="/">
        <a className="text-6xl font-black text-purple-400 no-underline">
          Unblog
        </a>
      </Link>
    </h1>
  ) : (
    <h1 className="mb-2 text-red-100">
      <Link href="/">
        <a className="text-2xl font-black text-purple-400 no-underline">
         Unblog
        </a>
      </Link>
    </h1>*/
  );

  return (
    <>
      <header>{header}</header>
   <div className="px-24 py-10 mx-auto bg-gray-900 text-gray-300 font-sans quicksand">
      <main>{children}</main>
      <footer>
        <br /> Copyleft, 
        © {new Date().getFullYear()},Freeman Irabaruta &#128293;
      </footer>
    </div>
    </>
  );
}
