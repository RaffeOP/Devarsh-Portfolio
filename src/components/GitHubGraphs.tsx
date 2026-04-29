import { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { siteConfig } from "@/config/site";
import { useTheme } from "next-themes";

const GitHubGraphs = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Standard GitHub green theme
  const theme = {
    dark: [
      "#161b22", // background
      "#0e4429", // level 1
      "#006d32", // level 2
      "#26a641", // level 3
      "#39d353", // level 4
    ],
    light: [
      "#ebedf0", // background
      "#9be9a8", // level 1
      "#40c463", // level 2
      "#30a14e", // level 3
      "#216e39", // level 4
    ],
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-[150px] w-full bg-muted/20 animate-pulse rounded-xl" />; 
  }

  const getThreeMonthsAgo = () => {
    const date = new Date();
    date.setMonth(date.getMonth() - 3);
    return date;
  };

  const transformThreeMonths = (data: any[]) => {
    const threeMonthsAgo = getThreeMonthsAgo();
    return data.filter((activity) => new Date(activity.date) >= threeMonthsAgo);
  };

  return (
    <>
      <div className="md:hidden w-full">
        <GitHubCalendar
          username={siteConfig.links.githubUsername}
          errorMessage="Could not fetch GitHub stats"
          hideColorLegend
          theme={theme}
          colorScheme={resolvedTheme as "light" | "dark"}
          showWeekdayLabels={true}
          blockMargin={6}
          transformData={transformThreeMonths}
        />
      </div>

      <div className="hidden md:block w-full">
        <GitHubCalendar
          username={siteConfig.links.githubUsername}
          errorMessage="Could not fetch GitHub stats"
          hideColorLegend={false}
          theme={theme}
          colorScheme={resolvedTheme as "light" | "dark"}
          showWeekdayLabels={true}
          blockMargin={6}
        />
      </div>
    </>
  );
};

export default GitHubGraphs;
