
import Event from "../../app/views/Event/event"
import { useParams } from "react-router-dom";
function useRouting(
  pages = {},
  paramName = "",
  Page404 = Event,
) {
  const params = useParams();
  let page = params.hasOwnProperty(paramName) ? params[paramName] : null;
  page = page === undefined ? "" : page;
  if (page === null) {
    return Page404;
  } else {
    if (pages.hasOwnProperty(page.toLowerCase())) {
      const Component = pages[page];
      return Component;
    }else {
      return Page404;
    }
  }
}

export default useRouting;