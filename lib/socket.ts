import {
  ClientUser,
  FileInfo,
  HlsStreamProps,
  Library,
  ShowInfo,
  EpisodeInfo,
  SeasonInfo,
  UserPermissions,
  FileLocation,
} from "./models";
import { FFProbeStream } from "ffprobe";

export interface ServerToClientEvents {
  createStreamCallback: (res: CreateEpisodeHlsStreamResponse) => void;
}

export interface ClientToServerEvents {
  createStream: (req: CreateEpisodeHlsStreamRequest) => void;
  cancelStream: () => void;
}

export interface CreateEpisodeHlsStreamResponse {
  streamProps: HlsStreamProps;
}

export interface CreateEpisodeHlsStreamRequest {
  library: string;
  mediaId: string;
  videoStream?: FFProbeStream & { codec_type: "video" };
  audioStream?: FFProbeStream & { codec_type: "audio" };
  subtitles?: (FFProbeStream & { codec_type: "subtitle" }) | FileLocation;
  subtitleFileLocation?: FileLocation;
  startOffset: number;
}
