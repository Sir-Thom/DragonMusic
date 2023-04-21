import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";

import BouttonJouerMusique from "./components/elements/boutonJouerMusique";

describe("BouttonJouerMusique", () => {
  test("renders play button", () => {
    const { getByRole } = render(<BouttonJouerMusique idMusique={0} />);
    const playButton = getByRole("button");
    expect(playButton).toBeInTheDocument();
    //expect(playButton).toHaveTextContent("▶");
  });

  test("clicking play button toggles audio playback", async () => {
    const { getByRole } = render(<BouttonJouerMusique idMusique={0} />);
    const playButton = getByRole("button");
    const audio = document.createElement("audio");
    audio.id = "audio0";
    document.body.appendChild(audio);

    expect(audio.paused).toBe(true);

    fireEvent.click(playButton);
    await waitFor(() => expect(audio.play()).toBe(undefined));

    fireEvent.click(playButton);
    await waitFor(() => expect(audio.paused).toBe(true));
  });
});
