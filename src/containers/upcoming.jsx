import { useUpcoming } from "../hooks/useUpcoming.js";
import { MatchCard } from "../components/match-card.jsx";
import { LoadingOverlay } from "@mantine/core";

/**
 * Represents the upcoming matches for a specific team.
 *
 * @param {number} teamId - The ID of the team.
 * @returns {JSX.Element} - The JSX element representing the upcoming matches.
 */
export const Upcoming = ({ teamId }) => {
  const { data, isLoading } = useUpcoming(teamId);

  return (
    <>
      {data && (
        <MatchCard
          time={data.time}
          date={data.date}
          homeImageSrc={data.home_image}
          awayImageSrc={data.away_image}
          competition={data.competition}
          matchName={data.match_name}
        />
      )}
      <LoadingOverlay visible={isLoading} />
    </>
  );
};
