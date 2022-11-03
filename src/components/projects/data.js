import BooksBnB from "../../images/tinified/BooksBnB.png";
import iivent from "../../images/tinified/ii-vent.png";
import Watchlist from "../../images/tinified/Watchlist.png";

export const projects = [
  {
    name: "iivent",
    image:
      window.__CONFIG__.NODE_ENV == "production"
        ? `https://cdn.kylejeffrey.me${iivent}`
        : iivent,
    link: "https://www.ii-vent.live/",
    repo: "https://github.com/kylejeffrey/ii-vent",
    description:
      "A desktop web-application that streamlines the management of music events.",
    languages: ["ruby", "rails", "javascript", "bootstrap", "heroku"],
  },
  {
    name: "Books BnB",
    image:
      window.__CONFIG__.NODE_ENV == "production"
        ? `https://cdn.kylejeffrey.me${BooksBnB}`
        : BooksBnB,
    link: "https://books-bnb-project.herokuapp.com/",
    repo: "https://github.com/kylejeffrey/Books-BnB",
    description:
      "A rails marketplace app that allows users to search, upload or borrow books from other users.",
    languages: ["ruby", "rails", "javascript", "bootstrap"],
  },
  {
    name: "Watchlist",
    image:
      window.__CONFIG__.NODE_ENV == "production"
        ? `https://cdn.kylejeffrey.me${Watchlist}`
        : Watchlist,
    link: "https://watch-list-kmj.herokuapp.com/",
    repo: "https://github.com/kylejeffrey/rails-watch-list",
    description:
      "A web application to organise and bookmark movies into themed watchlists for any mood or genre.",
    languages: ["ruby", "rails", "javascript", "bootstrap"],
  },
];

export async function fetchProjects() {
  return {
    body: projects,
  };
}
