import {Sub} from "../interfaces/Sub";

interface Props {
    // children:JSX.Element
    subs: Sub[]
  }
const List = ({subs}:Props) => {
  return (
    <ul>
        {
          subs.map((sub,index) => {
            return (
              <li key={index}>
                <img src={sub.avatar} />
                <h4>{sub.nickname} (<small>{sub.months}</small>)</h4>
                <p>{sub.description}</p>
              </li>
            )
          })
        }
      </ul>
  )
}

export default List 