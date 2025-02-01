 
import { useRouteError } from "react-router"

export const Error = () => {
    const err = useRouteError();
  return (
    <div>
    <div>Error</div>
    <div>{err.status}: {err.statusText}</div></div>
  )
}
