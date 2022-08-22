import {Link} from 'react-router-dom';
import React from "react";

const NotFoundPage = () => {
  return (
    <div>
      <h1>This page is not found. Go <Link to="/">home</Link></h1>
    </div>
  )
}

export default React.memo(NotFoundPage);
