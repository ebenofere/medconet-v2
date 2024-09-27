import { Box } from "../../../../styled-system/jsx"
import Search from "./Search"


export const Navbar = () => {
  return (
    <div>
        <div>
          <Box>Medconet</Box>
        </div>
        <div>
          <Search />
        </div>
    </div>
  )
}

export default Navbar