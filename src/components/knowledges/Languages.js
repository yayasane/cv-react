import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    constructor(props) {
        super(props)
        this.state = {
            languages: [
                { id: 1, value: "Javascript", xp: 2 },
                { id: 2, value: "Css", xp: 2 },
                { id: 3, value: "Php", xp: 2 },
                { id: 4, value: "Java", xp: 1 }
            ],
            frameworks: [
                { id: 1, value: "React", xp: 0.6 },
                { id: 2, value: "Symfony", xp: 0.7 },
                { id: 3, value: "Javafx", xp: 0.2 },
                { id: 4, value: "Bootstrap", xp: 2 }
            ]
        }
    }

    render() {
        const { languages, frameworks } = this.state
        return (
            <div className="languagesFrameworks">
                <ProgressBar languages={languages} className="languagesDisplay" title="languages" />
                <ProgressBar languages={frameworks} className="frameworksDisplay" title="Frameworks et Bibliothèques" />
            </div>
        );
    }
}

export default Languages;