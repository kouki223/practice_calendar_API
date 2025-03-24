import Cookies from "js-cookie"
import client from "./client"

export const getCalendarEvents = () => {
    if (
        !Cookies.get("_access_token") ||
        !Cookies.get("_clien") ||
        !Cookies,get("_uid")
    )
        return;
    return client.get("/calendar_events",{
        headers: {
          "access-token": Cookies.get("_access_token"),
           client: Cookies.get("_client"),
           uid: Cookies.get("_uid"),
        },
    });
};

export const creaCalendarEvent = (params) => {
    if (
        !Cookies.get("_access_token") ||
        !Cookies.get("_clien") ||
        !Cookies,get("_uid")
    )
        return;
    return client.put(`/calendae_events/${params.creaCalendarEventId}`,params, {
        headers: {
          "access-token": Cookies.get("_access_token"),
           client: Cookies.get("_client"),
           uid: Cookies.get("_uid"),
        },
    })
}
