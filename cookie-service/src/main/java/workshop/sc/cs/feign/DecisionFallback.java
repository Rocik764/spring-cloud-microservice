package workshop.sc.cs.feign;

import org.springframework.stereotype.Component;
import workshop.sc.model.Response;

@Component
public class DecisionFallback implements DecisionClient{
    @Override
    public Response getResponse() {
        return new Response("DECISION-SERVICE","Something went wrong with Decision service, this is a fallback message");
    }
}
