import localFont from "next/font/local";
import Header from "@/templates/homepage/Header";
 
const EuclidCircular = localFont({
  src: [
    {
      path: "../../public/fonts/Euclid-Circular-A-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Euclid-Circular-A-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Euclid-Circular-A-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Euclid-Circular-A-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
});

export default function Home() {
  return (
    <main className={EuclidCircular.className}>
      <div>
          <Header />
      </div>
    </main>
  )
}


{/* <div className={css({ fontSize: "2xl", fontWeight: 'bold', color:"#09A5DB" })}>Welcome to Medconet</div> */}
