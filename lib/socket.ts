import {
  ClientUser,
  FileInfo,
  HlsStreamProps,
  Library,
  ShowInfo,
  EpisodeInfo,
  SeasonInfo,
  UserPermissions,
} from "./models";

export interface ServerToClientEvents {
  createStreamCallback: (res: CreateHlsStreamResponse) => void;
}

export interface ClientToServerEvents {
  createStream: (req: CreateHlsStreamRequest) => void;
  cancelStream: () => void;
}

export interface CreateUserRequest {
  username: string;
  password: string;
  permissions: UserPermissions;
}

export interface ChangePasswordRequest {
  oldPassword: string;
  newPassword: string;
}

export interface CreateHlsStreamResponse {
  streamProps: HlsStreamProps;
}

export interface CreateHlsStreamRequest {
  library: string;
  mediaId: string;
  startOffset: number;
}
