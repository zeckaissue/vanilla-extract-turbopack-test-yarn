import { PageCss } from "./page.css";
import { Button } from "@acme/ui/src/button/Button";
export default function Home() {
  return (
  <div className={PageCss}>
    Hello world
    <Button label="Click me" />
  </div>
  );
}
