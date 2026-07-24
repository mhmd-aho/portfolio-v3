import { GitHubCalendar } from 'react-github-calendar';
import { useTheme } from "@/components/app/theme-provider"
export default function GithubSection() {
  const { theme } = useTheme();
  const colorScheme = theme === "dark" ? "dark" : "light";

  return (
    <div className="w-full rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6 shadow-sm flex flex-col items-center justify-center">
      <h3 className="text-xl font-semibold font-space-grotesk mb-4 text-center">
        GitHub Contribution Activity
      </h3>
      <div className="w-full overflow-x-auto flex justify-center py-2">
        <GitHubCalendar 
          username="mhmd-aho" 
          blockSize={12}
          blockMargin={4}
          fontSize={14}
          colorScheme={colorScheme}
        />
      </div>
    </div>
  );
}