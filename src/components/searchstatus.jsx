import React from "react";
import PropTypes from "prop-types";

const Searchstatus = ({ users }) => {
    const renderPhraseClasses = () => {
        let classes = "badge m-2 ";
        classes += users.length === 0 ? "bg-danger" : "bg-primary";
        return classes;
    };
    const renderPhrase = () => {
        let phrase = "";

        const ammountPeople = String(users.length);
        const lastSymbol = Number(ammountPeople.slice(-1));

        if (users.length === 0) {
            phrase += "Никто с тобой не тусанёт";
        } else if (
            (lastSymbol === 0 ||
                (lastSymbol >= 5 && lastSymbol <= 9) ||
                lastSymbol === 1) &&
            users.length !== 0
        ) {
            phrase += `${users.length} человек тусанёт с тобой сегодня`;
        } else if (lastSymbol >= 2 && lastSymbol <= 4) {
            phrase += `${users.length} человека тусанёт с тобой сегодня`;
        }
        return phrase;
    };

    return (
        <>
            <span className={renderPhraseClasses()}>{renderPhrase()} </span>
        </>
    );
};
Searchstatus.propTypes = {
    users: PropTypes.arrayOf.isRequired
};

export default Searchstatus;
