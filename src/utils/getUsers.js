import {
  florin,
  ana,
  dan,
  marian,
  calin,
  vlad,
  maria,
  roxana,
} from "../assets";

export const getUsers = () => {
  const users = [
    {
      name: "Florin",
      id: 1,
      picture: florin,
    },
    {
      name: "Ana",
      id: 2,
      picture: ana,
    },
    {
      name: "Daniel",
      id: 3,
      picture: dan,
    },
    {
      name: "Marian",
      id: 4,
      picture: marian,
    },
    {
      name: "Calin",
      id: 5,
      picture: calin,
    },
    {
      name: "Vlad",
      id: 6,
      picture: vlad,
    },
    {
      name: "Maria",
      id: 7,
      picture: maria,
    },
    {
      name: "Roxana",
      id: 8,
      picture: roxana,
    },
  ];

  return users;
};
