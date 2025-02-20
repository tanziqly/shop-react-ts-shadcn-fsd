import { Button } from "@shared/ui/button";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const NotFound: FC = () => {
  const navigate = useNavigate();

  const handleToLastPage = () => {
    window.history.length > 1 ? navigate(-1) : navigate("/");
  };

  return (
    <section className="h-screen px-5 flex-col text-center gap-2 flex-center">
      <h1 className="text-2xl sm:text-5xl font-black uppercase custom-gradient-text">
        404 Page not founded!
      </h1>
      <span className="mb-4 text-neutral-500 max-w-[550px]">
        The page or link you were looking for was not found in the system. Check
        the spelling of the link or contact support.
      </span>
      <Button onClick={handleToLastPage}>Back to the last page</Button>
    </section>
  );
};
