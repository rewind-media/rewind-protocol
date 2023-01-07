import { ServerRoutes } from "./routes.js";

export class HttpClient {
  static getShow = (showId: string) =>
    fetch(ServerRoutes.Api.Show.formatGetPath(showId))
      .then((it) => it.json())
      .then((it) => it as ServerRoutes.Api.Show.GetResponse);
  static getSeason = (seasonId: string) =>
    fetch(ServerRoutes.Api.Season.formatGetPath(seasonId))
      .then((it) => it.json())
      .then((it) => it as ServerRoutes.Api.Season.GetResponse);
  static getEpisode = (episodeId: string) =>
    fetch(ServerRoutes.Api.Episode.formatGetPath(episodeId))
      .then((it) => it.json())
      .then((it) => it as ServerRoutes.Api.Episode.GetResponse);
  static getLibrary = (libraryId: string) =>
    fetch(ServerRoutes.Api.Library.formatGetPath(libraryId))
      .then((it) => it.json())
      .then((it) => it as ServerRoutes.Api.Library.GetResponse);
  static listLibraries = () =>
    fetch(ServerRoutes.Api.Library.list)
      .then((it) => it.json())
      .then((it) => it as ServerRoutes.Api.Library.ListResponse);
  static listShows = (libraryId: string) =>
    fetch(ServerRoutes.Api.Show.formatListPath(libraryId))
      .then((it) => it.json())
      .then((it) => it as ServerRoutes.Api.Show.ListResponse);
  static listSeasons = (showId: string) =>
    fetch(ServerRoutes.Api.Season.formatListPath(showId))
      .then((it) => it.json())
      .then((it) => it as ServerRoutes.Api.Season.ListResponse);
  static listEpisodes = (seasonId: string) =>
    fetch(ServerRoutes.Api.Episode.formatListPath(seasonId))
      .then((it) => it.json())
      .then((it) => it as ServerRoutes.Api.Episode.ListResponse);

  static createLibrary = (request: ServerRoutes.Api.Library.CreateRequest) =>
    fetch(ServerRoutes.Api.Library.create, {
      body: JSON.stringify(request),
      ...HttpClient.POST_HEADERS,
    });

  static createUser = (request: ServerRoutes.Api.User.CreateRequest) =>
    fetch(ServerRoutes.Api.User.create, {
      body: JSON.stringify(request),
      ...HttpClient.POST_HEADERS,
    });

  static listUsers = () =>
    fetch(ServerRoutes.Api.User.list)
      .then((it) => it.json())
      .then((it) => it as ServerRoutes.Api.User.ListResponse);

  static deleteLibraries = (req: ServerRoutes.Api.Library.DeleteRequest) =>
    fetch(ServerRoutes.Api.Library.del, {
      body: JSON.stringify(req),
      ...HttpClient.POST_HEADERS,
    });

  static deleteUsers = (req: ServerRoutes.Api.User.DeleteRequest) =>
    fetch(ServerRoutes.Api.User.del, {
      body: JSON.stringify(req),
      ...HttpClient.POST_HEADERS,
    });

  static changePassword = (req: ServerRoutes.Api.User.ChangePasswordRequest) =>
    fetch(ServerRoutes.Api.User.changePassword, {
      body: JSON.stringify(req),
      ...HttpClient.POST_HEADERS,
    });

  private static POST_HEADERS = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };
}
