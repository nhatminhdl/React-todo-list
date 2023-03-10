import React from 'react'
import {
    useLocation,
    useNavigate,
    useParams,
  } from "react-router-dom";

//   export function withRouter( Child ) {
//     return ( props ) => {
//       const location = useLocation();
//       const navigate = useNavigate();
//       return <Child { ...props } navigate={ navigate } location={ location } />;
//     }
//   }

  function withRouter(Component) {
    return ( props ) => {
        const location = useLocation();
        const navigate = useNavigate();
        const params = useParams();
        
        return <Component { ...props } navigate={ navigate } location={ location } params ={params}/>;
    }
  
  }
  
export default withRouter


