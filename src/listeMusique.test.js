import React from "react";
import { render } from "@testing-library/react";
import ListeDeMusique from "./components/body/listeMusique";

describe("ListeDeMusique", () => {
  const data = [
    {
      nomMusique: "Musique 1",
      auteur: "Auteur 1",
      duree: "330",
      image: "http://example.com/image1.jpg",
    },
    {
      nomMusique: "Musique 2",
      auteur: "Auteur 2",
      duree: "415",
      image: "http://example.com/image2.jpg",
    },
  ];

  it("renders a list of music with their details", () => {
    const { getByText, getAllByAltText } = render(
      <ListeDeMusique data={data} />
    );

    expect(getByText("Musique 1")).toBeInTheDocument();
    expect(getByText("Auteur 1")).toBeInTheDocument();
    expect(getByText("00:05:30")).toBeInTheDocument();
    expect(getAllByAltText("Musique 1")[0].getAttribute("src")).toBe(
      "http://example.com/image1.jpg"
    );

    expect(getByText("Musique 2")).toBeInTheDocument();
    expect(getByText("Auteur 2")).toBeInTheDocument();
    expect(getByText("00:06:55")).toBeInTheDocument();
    expect(getAllByAltText("Musique 2")[0].getAttribute("src")).toBe(
      "http://example.com/image2.jpg"
    );
  });
});
