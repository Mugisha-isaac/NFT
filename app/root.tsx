import {
  Links,
  LiveReload,
  Meta,
  Outlet,
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
       <div className="text-2xl text-red-600">Hello dev</div>
      </>
    )
}

