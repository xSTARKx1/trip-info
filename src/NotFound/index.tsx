import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

interface Props {
    text: string;
    to: string;
    linkText: string;
}

const NotFound: FC<Props> = (props) => {
    const { text, to,linkText } = props;
    return (
        <div  className='not-found-page-wrapper'>
            <h1>{text}</h1>
            <Link to={to} className='link'>{linkText}</Link>
        </div>
    );
}

export default NotFound;
