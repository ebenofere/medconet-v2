import { css } from '../../styled-system/css';
 
export default function Home() {
  return (
    <div className={css({background: "#071B31"})}>
      <div className={css({ fontSize: "2xl", fontWeight: 'bold', color:"#09A5DB" })}>Welcome to Medconet</div>
    </div>
  )
}