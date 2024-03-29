import React from 'react'

const ContentAdd: React.FC<{ add: () => void }> = ({ add }) => {
  return (
    <div className="content__add">
      <button className="btn__app-icon add" onClick={add}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24">
          <path xmlns="http://www.w3.org/2000/svg" d="M12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V5C11 4.44772 11.4477 4 12 4Z" fill="currentColor"></path>
        </svg>
        <span>Add</span>
      </button>
    </div>
  )
}

export default ContentAdd