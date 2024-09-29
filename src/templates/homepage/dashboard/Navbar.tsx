
import { css } from "../../../../styled-system/css"
import { Box } from "../../../../styled-system/jsx"
import Search from "./Search"


export const Navbar = () => {
  return (
    <div  className={css({border: "1px solid black", bg:"yellow.100"})}>
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