package workshop.sc.cs.feign;

import org.springframework.stereotype.Component;
import workshop.sc.model.Response;

@Component
public class ActivityFallback implements ActivityClient {

    @Override
    public Response getResponse() {
        return new Response("ACTIVITY-SERVICE","Something went wrong with Activity service, this is a fallback message");
    }
}
