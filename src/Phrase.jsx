import React from 'react';
import './Phrase.css';
const PhrasesList = ({ phrase, language }) => {
    const getIcon = (language) => {
        switch (language) {
            case 'English':
                return '🇺🇸';
            case 'Spanish':
                return '🇪🇸';
            case 'Brazilian':
                return '🇧🇷';
            default:
                return '';
        }
    };

    return (
        <>
        <div className='phrase'>
            <p>{phrase} {getIcon(language)}</p>
        </div>
        </>
    );
};

export default PhrasesList;

  