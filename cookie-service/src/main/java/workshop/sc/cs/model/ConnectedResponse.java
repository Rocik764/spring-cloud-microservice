package workshop.sc.cs.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class ConnectedResponse {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonIgnore
    private Long id;

    private String decisionService;
    private String activityService;
    private String decisionMsg;
    private String activityMsg;

    public ConnectedResponse() {
    }

    public ConnectedResponse(String decisionService,
                             String activityService,
                             String decisionMsg,
                             String activityMsg) {

        this.decisionService = decisionService;
        this.activityService = activityService;
        this.decisionMsg = decisionMsg;
        this.activityMsg = activityMsg;
    }

    public String getDecisionService() {
        return decisionService;
    }

    public void setDecisionService(String decisionService) {
        this.decisionService = decisionService;
    }

    public String getActivityService() {
        return activityService;
    }

    public void setActivityService(String activityService) {
        this.activityService = activityService;
    }

    public String getDecisionMsg() {
        return decisionMsg;
    }

    public void setDecisionMsg(String decisionMsg) {
        this.decisionMsg = decisionMsg;
    }

    public String getActivityMsg() {
        return activityMsg;
    }

    public void setActivityMsg(String activityMsg) {
        this.activityMsg = activityMsg;
    }
}
