import {dataType} from "../data";


export default function Card(props: dataType ) {
  let badgeText
  if (props.openSpots === 0)
    badgeText = "SOLD OUT"
  else if (props.location === "Online")
    badgeText = "ONLINE"

  return (
    <div className={"card"}>
      {badgeText && <div className={"card--badge"}>{badgeText}</div>}
      <img src={`${process.env.PUBLIC_URL}/images/${props.coverImg}`} className={"card--image"}/>
      <div className={"card--stats"}>
        <img src={`${process.env.PUBLIC_URL}/images/star.png`} className={"card--star"}/>
        <span>{props.stats.rating}</span>
        <span className={"gray"}>({props.stats.reviewCount}) • </span>
        <span className={"gray"}>{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p><span className={"bold"}>From ${props.price}</span> / person</p>
    </div>
  )
}
