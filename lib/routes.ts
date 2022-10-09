export namespace ServerRoutes {
  export const root = `/`;

  export namespace Api {
    export namespace Auth {
      export const root = `${ServerRoutes.root}auth`;
      export const login = `${root}/login`;
      export const logout = `${root}/logout`;
      export const verify = `${root}/verify`;
    }

    export namespace Stream {
      export const root = `${ServerRoutes.root}streams`;
      export const m3u8FileName = `stream.m3u8`;
      export const initMp4FileName = `init-stream.mp4`;
      export const segmentFileExt = `.m4s`;
      export const m3u8 = `${root}/:id/${m3u8FileName}`;
      export const initMp4 = `${root}/:id/${initMp4FileName}`;
      export const segment = `${root}/:id/:segment${segmentFileExt}`;

      export function formatM3u8Path(id: string) {
        return `${root}/${id}/${m3u8FileName}`;
      }
    }

    export namespace Image {
      export const root = `${ServerRoutes.root}image`;
      export const image = `${root}/:id`;
      export function formatImagePath(imageId: string) {
        return `/image/${imageId}`;
      }
    }
  }

  export namespace Web {
    export const root = `${ServerRoutes.root}web`;
    export namespace Home {
      export const root = `${Web.root}/home`;

      export namespace Browser {
        export const root = `${Home.root}/browser`;

        export namespace Shows {
          export const root = `${Browser.root}/shows`;
          export const library = `${root}/library/:library`;
          export const show = `${root}/show/:show`;
          export const season = `${root}/season/:season`;
          export const episode = `${root}/episode/:episode`;
          export function formatLibraryRoot(library: string) {
            return `${root}/library/${library}`;
          }
          export function formatShowRoute(showId: string) {
            return `${root}/show/${showId}`;
          }

          export function formatSeasonRoute(seasonId: string) {
            return `${root}/season/${seasonId}`;
          }

          export function formatEpisodeRoute(episodeId: string) {
            return `${root}/episode/${episodeId}`;
          }
        }

        export namespace Settings {
          export const root = `${Browser.root}/settings`;
          export const client = `${root}/client`;
          export const user = `${root}/user`;

          export namespace Admin {
            export const root = `${Settings.root}/admin`;
            export const users = `${root}/users`;
          }
        }
      }

      export const player = `${root}/player/:library/:id`;

      export function formatPlayerRoute(library: string, id: string) {
        return `${root}/player/${library}/${id}`;
      }
    }

    export const login = `${root}/login`;
  }
}
