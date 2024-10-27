const Total  = (props) => {
  return (
    <p>
      Number of exercises {props.parts.reduce((total, part) => total + part.exercises, 0)}
    </p>
  )
}

export default Total