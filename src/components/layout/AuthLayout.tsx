import Navbar from "@/templates/homepage/dashboard/Navbar"

interface IAuthLayout {
    children: React.ReactNode
}

const AuthLayout = ({} : IAuthLayout) => {
  return (
    <div>
        <Navbar />
        <p>Auth Layout</p>
    </div>
  )
}

export default AuthLayout