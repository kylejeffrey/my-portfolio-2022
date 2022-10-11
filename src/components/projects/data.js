import BooksBnB from "../../images/BooksBnB.png";
import iivent from "../../images/ii-vent.png";
import Watchlist from "../../images/Watchlist.png";

export const projects = [
  {
    name: "iivent",
    image: iivent,
    link: "https://www.ii-vent.live/",
    description:
      "A desktop web-application that streamlines the management of music events.",
    languages: ["ruby", "rails", "javascript", "stimulus", "bootstrap"],
  },
  {
    name: "Books BnB",
    image: BooksBnB,
    link: "https://books-bnb-project.herokuapp.com/",
    description:
      "A rails marketplace app that allows users to search, upload or borrow books from other users.",
    languages: ["ruby", "rails", "javascript", "bootstrap"],
  },
  {
    name: "Watchlist",
    image: Watchlist,
    link: "https://watch-list-kmj.herokuapp.com/",
    description: "A web app for organising movies into themed watchlists.",
    languages: ["ruby", "rails", "javascript", "bootstrap"],
  },
];

export async function fetchProjects() {
  return {
    body: projects,
  };
}
