import React, {FC} from "react";
import './style.css'

interface IFilterButton {
  text: string
  action: any
}


export const FilterButton: FC<IFilterButton> = ({text, action}) => {
  console.log("button")
  return(
    <button className="filter-button" onClick={action}>{text}</button>
  )
}