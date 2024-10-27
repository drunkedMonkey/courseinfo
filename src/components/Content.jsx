import Part from './Part'

const Content = (props) => {
  return (
    <div>
        {props.parts.map((part,index) => <Part part={part.name} key={index} exercises={part.exercises} />)}      
    </div>
  )
}

export default Content