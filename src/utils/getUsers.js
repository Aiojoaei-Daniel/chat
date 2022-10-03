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
      id: 7110,
      picture: florin,
    },
    {
      name: "Ana",
      id: 9551,
      picture: ana,
    },
    {
      name: "Daniel",
      id: 6529,
      picture: dan,
    },
    {
      name: "Marian",
      id: 5011,
      picture: marian,
    },
    {
      name: "Calin",
      id: 2624,
      picture: calin,
    },
    {
      name: "Vlad",
      id: 4524,
      picture: vlad,
    },
    {
      name: "Maria",
      id: 9719,
      picture: maria,
    },
    {
      name: "Roxana",
      id: 2485,
      picture: roxana,
    },
  ];

  return users;
};
