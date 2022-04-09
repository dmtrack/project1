import React from "react";
import PropTypes from "prop-types";

const Qualitie = ({ users, index }) => {
    const renderTags = (color) => {
        let string = "badge m-1 bg-";
        string += color;
        return string;
    };

    return (
        <>
            {users[index].qualities.map((quality) => (
                <span className={renderTags(quality.color)} key={quality._id}>
                    {quality.name}
                </span>
            ))}
        </>
    );
};

Qualitie.propTypes = {
    users: PropTypes.arrayOf.isRequired,
    index: PropTypes.number.isRequired
};
export default Qualitie;
