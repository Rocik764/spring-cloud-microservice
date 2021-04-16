import React from "react";
import CookieService from "../../service/CookieService"
import { Container, ProgressText, Progress, ActivityService, DecisionService, ProgressContainer } from "../styled-divs/Styled";

function refreshPage() {
    window.location.reload(false);
}

class GetCookie extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            myCookie : []
        }
    }

    componentDidMount() {
        CookieService.getCookie().then((response) => {
            this.setState({myCookie : response})
        })
    }

    render() {

        return (
            <>
                {this.state.myCookie.length === 0 ?
                    <>
                        <Container>
                            <DecisionService>
                                <h6>Decision service error</h6>
                                <h2>Error message</h2>
                            </DecisionService>
                            <ActivityService>
                                <ProgressContainer>
                                    <Progress width={ Math.floor(Math.random() * (100 - 1 + 1)) + 1 }/>
                                    <ProgressText>
                                        Random progress
                                    </ProgressText>
                                </ProgressContainer>
                                <h6>Activity service error</h6>
                                <h2>Error message</h2>
                                <button onClick={refreshPage} className="btn">New values</button>
                            </ActivityService>
                        </Container>
                    </>
                    :
                    <>
                        <Container>
                            <DecisionService>
                                <h6>{this.state.myCookie.decisionService}</h6>
                                <h2>{this.state.myCookie.decisionMsg}</h2>
                            </DecisionService>
                            <ActivityService>
                                <ProgressContainer>
                                    <Progress width={ Math.floor(Math.random() * (100 - 1 + 1)) + 1 }/>
                                    <ProgressText>
                                        Random progress
                                    </ProgressText>
                                </ProgressContainer>
                                <h6>{this.state.myCookie.activityService}</h6>
                                <h2>{this.state.myCookie.activityMsg}</h2>
                                <button onClick={refreshPage} className="btn">New values</button>
                                <a href="https://github.com/Rocik764/fortune-cookie">Server config</a><br/>
                                <a href="https://github.com/Rocik764/spring-cloud-microservice">Project repository</a>
                            </ActivityService>
                        </Container>
                    </>
                }
            </>
        )
    }
}

export default GetCookie