import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const PriorityDisplay = () => {
  return (
    <div className="flex justify-start align-baseline">
      <FontAwesomeIcon icon={faFile} className="text-red-400" />
      <FontAwesomeIcon icon={faFile} className="text-red-400" />
      <FontAwesomeIcon icon={faFile} className="text-red-400" />
      <FontAwesomeIcon icon={faFile} className="text-red-400" />
      <FontAwesomeIcon icon={faFile} className="text-red-400" />
    </div>
  )
}

export default PriorityDisplay;