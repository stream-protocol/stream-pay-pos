import React, { FC } from 'react';
import { StreamPayLogo } from '../images/StreamPayLogo';
import css from './PoweredBy.module.css';

export const PoweredBy: FC = () => {
    return (
        <div className={css.root}>
            Powered by <StreamPayLogo />
        </div>
    );
};
