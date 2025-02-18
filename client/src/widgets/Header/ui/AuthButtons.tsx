import { Button } from "@shared/ui/button";
import { Link } from "react-router-dom";

export const AuthButtons = () => (
  <>
    <Button variant="outline" asChild>
      <Link to="sign-in">Sign In</Link>
    </Button>
    <Button asChild>
      <Link to="sign-up">Sign Up</Link>
    </Button>
  </>
);
