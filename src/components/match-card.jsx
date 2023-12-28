import {
  Avatar,
  Card,
  Divider,
  Group,
  List,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { VscCalendar } from "react-icons/vsc";
import {
  BsCalendar,
  BsCalendarFill,
  BsClock,
  BsClockFill,
} from "react-icons/bs";

/**
 * Represents a MatchCard component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.date - The date of the match.
 * @param {string} props.time - The time of the match.
 * @param {string} props.homeImageSrc - The source of the home team's image.
 * @param {string} props.awayImageSrc - The source of the away team's image.
 * @param {string} props.competition - The competition of the match.
 * @param {string} props.matchName - The name of the match.
 * @returns {JSX.Element} - The rendered MatchCard component.
 */
export const MatchCard = ({
  date,
  time,
  homeImageSrc,
  awayImageSrc,
  competition,
  matchName,
}) => {
  return (
    <Card title={"Next Match"}>
      <Stack gap={"xs"}>
        <Group justify={"space-between"}>
          <Stack gap={0}>
            <List size={"sm"}>
              <List.Item icon={<BsCalendarFill style={{ marginTop: 6 }} />}>
                {date}
              </List.Item>
              <List.Item icon={<BsClockFill style={{ marginTop: 6 }} />}>
                {time}
              </List.Item>
            </List>
          </Stack>
          <Avatar.Group spacing={0}>
            <Avatar variant="filled" radius="xl" src={homeImageSrc} />
            <Avatar variant="filled" radius="xl" src={awayImageSrc} />
          </Avatar.Group>
        </Group>
        <Divider />
        <Stack gap={2}>
          <Title size={"xs"} order={5}>
            {competition}
          </Title>
          <Text size={"xs"}>{matchName}</Text>
        </Stack>
      </Stack>
    </Card>
  );
};
