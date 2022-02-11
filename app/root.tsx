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
       <div className="px-10 sm:text-sm">
         <div className="m-5">
            <nav className="grid grid-cols-2 grid-rows-1 gap-3  relative mt-6" style={{width:'85%', marginLeft:'5em'}}>
              <div className=" flex flex-row clear-left mt-5">
              <div className="w-2 h-2 rounded-full bg-red-400"></div>
             <Link to='/'>Cuans</Link>
              </div>
              <div className="absolute top-5 px-14 ml-10 px-10" >
              <ul className="grid grid-rows-1 grid-cols-6 text-center">
               <li>
                 <Link to='/about' className="capitalize p-3">About us</Link>
               </li>
               <li>
                 <Link to='/benefits' className="capitalize p-3">The Benefits</Link>
               </li>
               <li>
                 <Link to='/how' className="capitalize p-3">How It Works </Link>
               </li>
               <li>
                 <Link to='/premium' className="capitalize p-3">Premium Plans </Link>
               </li>
               <li>
                 <Link to='/contact' className="capitalize p-3">Contact Us </Link>
               </li>
               <li>
               <Link to='auth/register' className="capitalize p-3 text-bold ml-3 bg-black text-white rounded-full">create account</Link>
               </li>
             </ul>
              </div>
            </nav>
         </div>
       </div>
      </>
    )
}

