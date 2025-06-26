import { useEffect, useState } from "react";
import RiSetExplorer from "./app";
import RegulonExplorer from "./app_old";
import { CircularProgress, LinearProgress } from "@mui/material"
import { Cover } from "../../components/ui-components";
import Divider from "@mui/material/Divider";


export const PATH_REGULONEXPLORER = {
  path: "regulonExplorer",
  element: <RegulonExplorer />,
};

export const TEST_PATH = {
  path: "testAlexis",
  element: <App />
}


function App() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [valid, setValid] = useState(null)

  useEffect(() => {
    if (process.env.REACT_APP_PROSSES_SERVICE) {
      const wdps = process.env.REACT_APP_PROSSES_SERVICE
      if (valid === null) {
        setTimeout(() => {
          fetch(wdps + '/gramaticalTool/').then((response) => {
            if (response.status === 200) {
              setValid(true)
            } else {
              setError({ status: 500, description: "Error in the service wdps/grammaticalTool " })
              setValid(false)
            }
            setLoading(false)
          }).catch((error)=>{
            const description = `Sorry we have a problems`
            setError({ status: 400, description: error?.message || "Error to fetch" })
            setLoading(false)
            setValid(false)
          })
        }, 2500)
      }
    } else {
      console.error("No environment WDPS service available")
      setError({ status: 403, description: "No environment WDPS service available" })
    }
  })

  return <div>
    <Cover >
      <h1>Regulon Explorer</h1>
      <p>Define your filters to explore regulatory regions</p>
    </Cover>
    <div>
      {error?.description && <div>
        <p style={{margin: "10px"}}><b>
          Sorry we encountered some issues and are working on it if the problem persists please contact regulondb@ccg.unam.mx
        </b></p>
        <p style={{padding: "10px", backgroundColor: "#ff9191"}} >Error: {error?.description}</p>
      </div>}
      {loading && (<div>
        <LinearProgress />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }} >
          <p style={{ margin: "10px" }} >Loading Application...</p>
        </div>
      </div>)}

      {valid && (<RiSetExplorer />)}
    </div>
  </div>
}


export default PATH_REGULONEXPLORER