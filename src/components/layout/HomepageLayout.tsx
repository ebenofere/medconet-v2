import Navbar from "@/templates/homepage/dashboard/Navbar"

interface IHomepageLayout {
    children: React.ReactNode
}

const HomepageLayout = ({} : IHomepageLayout) => {
  return (
    <div>
        <Navbar />
        <p>Auth Layout</p>
    </div>
  )
}

export default HomepageLayout