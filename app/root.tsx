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
       <div className=" sm:text-sm" style={{marginLeft:"10em"}}>
         <div>
            <nav className="grid grid-cols-2 grid-rows-1 gap-3  relative mt-6 mb-12  " style={{width:'85%', marginLeft:'5em'}}>
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
               <Link to='auth/register' className="capitalize p-3 text-bold ml-5 bg-black text-white rounded-full">create account</Link>
               </li>
             </ul>
              </div>
            </nav>
         </div>
         <div className="py-12 mb-12 text-center">
           <p className="mb-12 capitalize" style={{fontSize:'4em'}}>manage your</p>
           <p className="capitalize mt-8" style={{fontSize:'4em'}}>NFT price easily</p>
         </div>
         <div className="bg-red-400 ml-14 grid grid-rows-1 grid-cols-2" style={{width:'80%', height:'26em'}}>
           <div className="bg-white m-5" style={{width:'90%', height:'90%'}}>
             <img className="rounded-lg flex items-center justify " style={{width:'80%'}} src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80" alt="spiral" />
           </div>
           <div className="bg-yellow-500 m-5" style={{width:'90%', height:'90%'}}>
             <div className="bg-blue-600">
               manage your NFT art development
             </div>
           </div>
         </div>
       </div>
      </>
    )
}

