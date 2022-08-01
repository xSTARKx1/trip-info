// External
import React, { FC } from 'react';
import { DocumentTypes } from '../../types';

import './index.scss';

interface Props {
    document: DocumentTypes,
}

const DocumentDetails: FC<Props> = (props) => {
    const { name, attachment } = props.document;
    return (
        <div className='link-wrapper'>
            <a href={attachment.fileUrl} rel="noreferrer" target="_blank" className='document-link'>{name}</a>
        </div>
    );
}

export default DocumentDetails;
