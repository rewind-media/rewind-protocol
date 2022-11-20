import {
  Library,
  SeasonInfo,
  EpisodeInfo,
  ShowInfo,
  User,
  ClientUser,
} from "./models";

const formatParam = (paramName: string) => `:${paramName}`;

export namespace ServerRoutes {
  export const root = ``;

  export namespace Api {
    export const root = `${ServerRoutes.root}/api`;
    export namespace Auth {
      export const root = `${Api.root}/auth`;
      export const login = `${root}/login`;
      export const logout = `${root}/logout`;
      export const verify = `${root}/verify`;
    }

    export namespace User {
      const root = `${Api.root}/user`;

      export const list = `${root}/list`;

      export interface ListResponse {
        readonly users: User[];
      }

      export const create = `${root}/create`;

      export interface CreateRequest {
        readonly user: ClientUser;
        readonly password: string;
      }

      export const del = `${root}/delete`;

      export interface DeleteRequest {
        readonly usernames: string[];
      }

      export const changePassword = `${root}/changePassword`;

      export interface ChangePasswordRequest {
        readonly oldPassword: string;
        readonly newPassword: string;
      }
    }

    export namespace Library {
      const root = `${Api.root}/lib`;

      export interface ListResponse {
        readonly libraries: Library[];
      }

      export const list = `${root}/list`;

      export interface GetParams {
        readonly libraryId: string;
      }

      export interface GetResponse {
        readonly library: Library;
      }

      export const get = `${root}/get/:libraryId`;
      export const formatGetPath = (libraryId: string) =>
        get.replace(":libraryId", libraryId);
    }

    export namespace Show {
      const root = `${Api.root}/show`;

      export interface ListParams {
        readonly libraryId: string;
      }

      export interface ListResponse {
        readonly shows: ShowInfo[];
      }

      export const list = `${root}/list/:libraryId`;
      export const formatListPath = (libraryId: string) =>
        list.replace(":libraryId", libraryId);

      export interface GetParams {
        readonly showId: string;
      }

      export interface GetResponse {
        readonly show: ShowInfo;
      }

      export const get = `${root}/get/:showId`;
      export const formatGetPath = (showId: string) =>
        get.replace(":showId", showId);
    }

    export namespace Season {
      const root = `${Api.root}/season`;

      export interface ListParams {
        readonly showId: string;
      }

      export interface ListResponse {
        readonly seasons: SeasonInfo[];
      }

      export const list = `${root}/list/:showId`;
      export const formatListPath = (showId: string) =>
        list.replace(":showId", showId);

      export interface GetParams {
        readonly seasonId: string;
      }

      export interface GetResponse {
        readonly season: SeasonInfo;
      }

      export const get = `${root}/get/:seasonId`;
      export const formatGetPath = (seasonId: string) =>
        get.replace(":seasonId", seasonId);
    }

    export namespace Episode {
      const root = `${Api.root}/episode`;

      export interface ListParams {
        readonly seasonId: string;
      }

      export interface ListResponse {
        readonly episodes: EpisodeInfo[];
      }

      export const list = `${root}/list/:seasonId`;
      export const formatListPath = (seasonId: string) =>
        list.replace(":seasonId", seasonId);

      export interface GetParams {
        readonly episodeId: string;
      }

      export interface GetResponse {
        readonly episode: EpisodeInfo;
      }

      export const get = `${root}/get/:episodeId`;
      export const formatGetPath = (episodeId: string) =>
        get.replace(":episodeId", episodeId);
    }

    export namespace Stream {
      export const root = `${Api.root}/streams`;
      export const m3u8FileName = `stream.m3u8`;
      export const initMp4FileName = `init-stream.mp4`;
      export const segmentFileExt = `.m4s`;
      export const m3u8 = `${root}/:id/${m3u8FileName}`;
      export const initMp4 = `${root}/:id/${initMp4FileName}`;
      export const segment = `${root}/:id/:segment${segmentFileExt}`;
      export const formatM3u8Path = (id: string) => m3u8.replace(":id", id);
    }

    export namespace Image {
      export const root = `${Api.root}/image`;
      export const image = `${root}/:id`;
      export const formatImagePath = (id: string) => image.replace(":id", id);
    }
  }

  export namespace Web {
    export const root = `${ServerRoutes.root}/web`;
    export namespace Private {
      export const root = `${Web.root}/private`;
      export namespace Browse {
        export const root = `${Private.root}/browse`;
        export const home = `${root}/home`;
        export const show = `${root}/show/:show`;
        export const season = `${root}/season/:season`;
        export const episode = `${root}/episode/:episode`;

        export const formatShowRoute = (showId: string) =>
          show.replace(":show", showId);
        export const formatSeasonRoute = (seasonId: string) =>
          season.replace(":season", seasonId);
        export const formatEpisodeRoute = (library: string) =>
          episode.replace(":episode", library);

        export namespace Library {
          export const root = `${Browse.root}/lib/:library`;
          export const show = `${root}/show`;
          export const formatShowRoute = (libraryId: string) =>
            show.replace(":library", libraryId);
        }

        export namespace Settings {
          export const root = `${Browse.root}/settings`;
          export const client = `${root}/client`;
          export const user = `${root}/user`;

          export namespace Admin {
            export const root = `${Settings.root}/admin`;
            export const users = `${root}/users`;
          }
        }
      }

      export namespace View {
        export const root = `${Private.root}/view`;
        export const show = `${root}/show/:library/:id`;
        export const formatPlayerRoute = (library: string, id: string) =>
          `${root}/show/${library}/${id}`;
      }
    }
    export namespace Auth {
      export const root = `${Web.root}/auth`;
      export const login = `${root}/login`;
    }
  }
}
