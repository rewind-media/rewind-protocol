import {
  ClientUser,
  FileInfo,
  HlsStreamProps,
  Library,
  SeriesInfo,
  ShowEpisodeInfo,
  ShowSeasonInfo,
  UserPermissions,
} from "./models";

export interface ServerToClientEvents {
  listSeriesCallback: (res: ListShowsResponse) => void;
  listShowSeasonsCallback: (res: ListShowSeasonsResponse) => void;
  listShowEpisodesCallback: (res: ListShowSeasonEpisodesResponse) => void;
  getShowEpisodeCallback: (res: GetShowEpisodeResponse) => void;
  createStreamCallback: (res: CreateHlsStreamResponse) => void;
  getMediaInfoCallback: (res: GetFileInfoResponse) => void;
  getLibraryCallback: (res: GetLibraryResponse) => void;
  getUsersCallback: (res: ListUsersResponse) => void;
  createUserCallback: (res: CreateUserResponse) => void;
  deleteUsersCallback: (res: DeleteUsersResponse) => void;
  changePasswordCallback: (res: ChangePasswordResponse) => void;
  listLibrariesCallback: (res: ListLibrariesResponse) => void;
}

export interface ClientToServerEvents {
  listSeries: (req: ListShowsRequest) => void;
  listShowSeasons: (req: ListShowSeasonsRequest) => void;
  listShowEpisodes: (req: ListShowEpisodesRequest) => void;
  getShowEpisode: (req: GetEpisodeRequest) => void;
  createStream: (req: CreateHlsStreamRequest) => void;
  cancelStream: () => void;
  listMedia: (req: ListMediaRequest) => void;
  getLibrary: (req: GetLibraryRequest) => void;
  listUsers: () => void;
  createUser: (req: CreateUserRequest) => void;
  deleteUsers: (req: DeleteUsersRequest) => void;
  changePassword: (req: ChangePasswordRequest) => void;
  listLibrariesRequest: () => void;
}

export interface GetLibraryResponse {
  library: Library;
}

export interface GetFileInfoResponse {
  library: string;
  items: FileInfo[];
}

export interface GetFilePathResponse {
  readonly library: string;
  readonly path: string;
  readonly childPaths: string[];
  readonly leafs: FileInfo[];
}

export interface GetMediaPathChildrenRequest {
  readonly library: string;
  readonly path: string;
}

export interface GetLibraryRequest {
  libraryId: string;
}

export interface ListUsersResponse {
  users: ClientUser[];
}

export interface CreateUserResponse {
  created: boolean;
  username: string;
}

export interface ChangePasswordResponse {
  success: boolean;
}

export interface ListLibrariesResponse {
  libraries: Library[];
}

export interface CreateUserRequest {
  username: string;
  password: string;
  permissions: UserPermissions;
}

export interface DeleteUsersRequest {
  usernames: string[];
}

export interface DeleteUsersResponse {
  deletedUsernames: string[];
}

export interface ChangePasswordRequest {
  oldPassword: string;
  newPassword: string;
}

export interface CreateHlsStreamResponse {
  streamProps: HlsStreamProps;
}

export interface ListMediaRequest {
  readonly library: string;
}

export interface CreateHlsStreamRequest {
  library: string;
  mediaId: string;
  startOffset: number;
}

export interface ListShowsResponse {
  readonly shows: SeriesInfo[];
}

export interface ListShowsRequest {
  readonly libraryId: string;
}

export interface ListShowSeasonsResponse {
  readonly seasons: ShowSeasonInfo[];
}
export interface ListShowSeasonEpisodesResponse {
  readonly episodes: ShowEpisodeInfo[];
}

export interface ListShowSeasonsRequest {
  readonly show: string;
}
export interface ListShowEpisodesRequest {
  readonly season: string;
}
export interface GetEpisodeRequest {
  readonly episode: string;
}

export interface GetShowEpisodeResponse {
  readonly episode: ShowEpisodeInfo | undefined;
}
