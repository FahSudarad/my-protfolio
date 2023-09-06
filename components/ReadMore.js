import React, { useState } from "react";

function ReadMore({ text, maxLength }) {
  const [isReadMore, setIsReadMore] = useState(false);
  const toggleReadMore = (event) => {
    event.preventDefault();
    setIsReadMore(!isReadMore);
  };

  return (
    <div>
      <div>
        {isReadMore ? text : text.slice(0, maxLength)}
        {!isReadMore && text.length > maxLength && (
          <>
            <br />
            <a href="#" onClick={toggleReadMore} className="text-[yellow]">
              Read More...
            </a>
          </>
        )}
      </div>
      {isReadMore && (
        <a href="#" onClick={toggleReadMore} className="text-[yellow]">
          Show Less
        </a>
      )}
    </div>
  );
}

export default ReadMore;
