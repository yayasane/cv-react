import React, { Component } from 'react';

class Project extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showInfo: false
        }
    }

    handleInfo = () => {
        this.setState((state) => ({ showInfo: !state.showInfo }));
    };



    render() {
        const { name, languagesIcons, source, info, picture } = this.props.project
        return (
            <div className="project">
                <div className="icons">
                    {languagesIcons.map((icon) => <i className={icon} key={icon}></i>)}
                </div>
                <h3>{name}</h3>
                <img src={picture} alt="" onClick={this.handleInfo} />
                <span className="infos" onClick={this.handleInfo}>
                    <i className="fas fa-plus-circle"></i>
                </span>

                {
                    this.state.showInfo && (
                        <div className="showInfos">
                            <div className="infosContent">
                                <div className="head">
                                    <h2>{name}</h2>
                                    <div className="sourceCode">
                                        <a className="button" href={source} target="_blank" rel="noopener noreferrer">Code source</a>
                                    </div>
                                </div>

                                <p className="text">{info}</p>

                                <div className="button return" onClick={this.handleInfo}>Retourner sur la page</div>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Project;