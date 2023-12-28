import { useSearchParam } from "react-use";
import { Stack } from "@mantine/core";
import { Upcoming } from "./containers/upcoming.jsx";

function App() {
  const teams = useSearchParam("teams");

  return (
    <Stack p={"xs"} gap={"xs"}>
      {teams.split(",").map((it) => (
        <Upcoming key={it} teamId={+it} />
      ))}
    </Stack>
  );
}

export default App;
