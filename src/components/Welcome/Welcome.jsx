// rafce
import "./Welcome.css"

const Welcome = (props) => {
console.log(props)
  return (
    <div className="text-welcome">Welcome to jungle {props.text} {props.surname}</div>
  )
}

export default Welcome
// module.exports = Welcome