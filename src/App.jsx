import { App2 } from "./components/app2";
function App() {
 const element = <h1>Hello, World!</h1>;
 const name = "ANJALI";
  return (
    <> {/*we have to use fragments during multiple elements inside return and js will not render*/}
    {/*SIMPLE JSX ELEMENT*/}
     {element}
     {/* <h1>hi guys</h1> */}

     {/*JSX WITH JS EXPRESSION*/}
      {/* <h1>Hello, {name}!</h1>; use of html tag in js */}
      <App2/>
    </>
  )
}

export default App
