import Navbar from "@/templates/homepage/dashboard/Navbar"


const AuthLayout = ({} : {children: React.ReactNode}) => {
  return (
    <div>
        <Navbar />
        <p>Auth Layout</p>
    </div>
  )
}

export default AuthLayout