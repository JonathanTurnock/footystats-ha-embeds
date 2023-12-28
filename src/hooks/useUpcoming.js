import useSWR from "swr";
import axios from "axios";

const fetcher = (url) =>
  axios.get(url, { baseURL: "https://footystats.org" }).then((res) => res.data);

/**
 * Represents data for an upcoming football match.
 * @typedef {Object} MatchData
 * @property {string} date - The date of the match.
 * @property {string} time - The time of the match.
 * @property {string} match_name - The name of the match.
 * @property {string} url - A URL for more details about the match.
 * @property {string} home_image - URL of the home team's image.
 * @property {string} away_image - URL of the away team's image.
 * @property {string} competition - The competition in which the match is played.
 */

/**
 * Fetches upcoming events for a specific team.
 *
 * @param {number} teamId - The ID of the team.
 * @returns {Promise<MatchData[]>} - A promise that resolves to an array of data representing the upcoming events.
 */
export const useUpcoming = (teamId) =>
  useSWR(`/e/upcoming?id=${teamId}`, fetcher);
