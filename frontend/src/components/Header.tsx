import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserEdit} from '@fortawesome/free-solid-svg-icons'

interface Props {
  heading: string;
}

const Header = (props: Props) => {
  const userSettings = <FontAwesomeIcon onClick={() => {}} icon={faUserEdit} size="2x" />;
  return (
    <header>
      <div className="title">
        <h1>{props.heading}</h1>
      </div>
      {userSettings}
    </header>
  )
}

export default Header;