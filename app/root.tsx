import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Link
} from "remix";
import type { MetaFunction } from "remix";
import tailwindStyles from "./tailwind.css"

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export const links = ()=>[{
  rel:'stylesheet',
  href:tailwindStyles
}]


export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet/>
      </Layout>
    </Document>
  );
}

function Document({children, title}){
  return(
    <html lang='en'>
<head>
<meta charSet="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<Meta />
  <title> {title ? title : 'Remix | NFT | Development | By M.I'} </title>
 <Links />
</head>
<body>
  {children}
  {process.env.NODE_ENV === 'development' ? <LiveReload />: null}
</body>
</html>
  )
}

function Layout(){
    return(
      <>
       <div className="">
         <div className="m-5">
            <nav className="grid grid-cols-2 grid-rows-1 gap-3">
              <div className=" flex flex-row clear-left mt-5 relative">
              <div className="w-2 h-2 rounded-full bg-red-400"></div>
             <Link to='/'>Cuans</Link>
              </div>
              <div className="absolute top-10 px-14 ml-10 px-10" >
              <ul className="grid grid-rows-1 grid-cols-5 text-center">
               <li>
                 <Link to='/about' className="capitalize">About us</Link>
               </li>
               <li>
                 <Link to='/benefits' className="capitalize">The Benefits</Link>
               </li>
               <li>
                 <Link to='/how' className="capitalize">How It Works </Link>
               </li>
               <li>
                 <Link to='/premium' className="capitalize">Premium Plans </Link>
               </li>
               <li>
                 <Link to='/contact' className="capitalize">Contact Us </Link>
               </li>
             </ul>
              </div>
            </nav>
         </div>
       </div>
      </>
    )
}

