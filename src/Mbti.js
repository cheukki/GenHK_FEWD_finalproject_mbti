import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StartTest from "./HomePageRoutes/StartTest";
import Test from "./HomePageRoutes/Test";
import TestResult from "./HomePageRoutes/TestResult";
import YourResult from "./HomePageRoutes/YourResult";
import PersonalityTypes from "./HomePageRoutes/PersonalityTypes";
import TypeResult from "./HomePageRoutes/TypeResult";

import "./Mbti.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StartTest />,
  },
  {
    path: `/Test`,
    element: <Test />,
  },
  {
    path: `/TestResult`,
    element: <TestResult />,
  },
  {
    path: `/YourResult`,
    element: <YourResult />,
  },
  {
    path: `/PersonalityTypes`,
    element: <PersonalityTypes />,
  },
  {
    path: `/PersonalityTypes/:id`,
    element: <TypeResult />,
  },
]);

export default function Mbti() {
  return (
    <div className="Mbti">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   // Outlet,
// } from "react-router-dom";
// import data from "./HomePageRoutes/data.json";
// import TypeResult from "./HomePageRoutes/TypeResult";

// export default function App() {
//   function StartTest() {
//     return (
//       <div className="StartTest" style={{ margin: 10 }}>
//         <h1>What is your Personality? Let's try MBTI Test!</h1>
//         <button id="start-btn">Start</button>
//       </div>
//     );
//   }

//   function YourResult() {
//     return (
//       <div className="YourResult" style={{ margin: 10 }}>
//         <h1>I'm the result</h1>
//       </div>
//     );
//   }

//   function PersonalityTypes() {
//     return (
//       <div className="PersonalityTypes" style={{ margin: 10 }}>
//         <div className="result-img"></div>
//         <div className="result-score"></div>
//         <div className="sidebar">
//           <ul
//             style={{
//               listStyle: "none",
//               border: "1px solid",
//             }}
//           >
//             {data.typeList.map((typeobj) => (
//               <li key={typeobj.type} style={{ width: "12.5%", float: "left" }}>
//                 <Link to={`/PersonalityTypes/${typeobj.type}`}>
//                   {typeobj.type}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <Router>
//       <nav style={{ margin: 10 }}>
//         <Link to="/" style={{ padding: 5 }}>
//           START
//         </Link>
//         <Link to="/YourResult" style={{ padding: 5 }}>
//           YOUR RESULT
//         </Link>
//         <Link to="/PersonalityTypes" style={{ padding: 5 }}>
//           PersonalityTypes
//         </Link>
//       </nav>
//       <Routes>
//         <Route path="/" element={<StartTest />} />
//         <Route path="/YourResult" element={<YourResult />} />
//         <Route path="/PersonalityTypes" element={<PersonalityTypes />} />
//         <Route path="/PersonalityTypes/:id" element={<TypeResult />} />
//       </Routes>
//     </Router>
//   );
// }
