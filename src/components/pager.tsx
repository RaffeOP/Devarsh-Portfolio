import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";

const Pager = ({
  prevHref,
  nextHref,
  prevTitle,
  nextTitle,
}: {
  prevHref: string;
  nextHref: string;
  prevTitle: string;
  nextTitle: string;
}) => {
  const { pathname } = useLocation();
  return (
    <div className="flex flex-row items-center justify-between w-full mt-8">
      {prevHref !== pathname && (
        <Button variant="ghost" asChild>
          <Link to={prevHref}>
            <ChevronLeft />
            {prevTitle}
          </Link>
        </Button>
      )}

      <Button variant="ghost" className="ml-auto" asChild>
        <Link to={nextHref}>
          {nextTitle}
          <ChevronRight />
        </Link>
      </Button>
    </div>
  );
};
export default Pager;
