import React from 'react';

const ProgressBar = ({ languages, className, title }) => {
    //console.log(props)
    return (
        <div className={className}>
            <h3>{title}</h3>
            <div className="years">
                <span>Année d'experiences</span>
                <span>1 an</span>
                <span>2 ans</span>
            </div>

            <div>
                {
                    languages.map((langue) => {
                        const xpYears = 2
                        const progressBar = langue.xp / xpYears * 100 + '%'
                        return (
                            <div key={langue.id} className="languagesList">
                                <li>{langue.value}</li>
                                <div className="progressBar" style={{ width: progressBar }}></div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ProgressBar;