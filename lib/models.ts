import { FFProbeResult } from "ffprobe";

export interface FfProbeInfoFormat {
  duration?: number;
  filename?: string;
}

export interface FfProbeInfo extends FFProbeResult {
  readonly format: FfProbeInfoFormat;
}

export interface UserPermissions {
  isAdmin: boolean;
}

export interface StreamProps {
  readonly id: string;
  readonly mediaInfo: MediaInfo;
  readonly startOffset: number; // Seconds
  readonly duration: number; // Seconds
}

export interface ClientUser {
  readonly username: string;
  readonly permissions: UserPermissions;
}

export interface User extends ClientUser {
  readonly hashedPass: Buffer;
  readonly salt: string;
}

export interface Library {
  readonly name: string;
  readonly rootPaths: string[];
  readonly type: LibraryType;
}

export enum LibraryType {
  File = "File",
  Show = "Show",
  Image = "Image",
}

export interface LibraryData {
  readonly libraryName: string;
  readonly lastUpdated: Date;
}

export interface FileInfo extends LibraryData {
  readonly name: string;
  readonly id: string;
  readonly path: string;
}

export interface MediaInfo extends FileInfo {
  readonly info: FfProbeInfo;
}

export interface ImageInfo extends FileInfo {}

export interface ShowEpisodeInfo extends MediaInfo {
  readonly showId: string;
  readonly seasonId: string;
  readonly episodeImageId?: string;
}

export interface SeriesInfo extends LibraryData {
  readonly id: string;
  readonly showName: string;
  readonly seriesImageId?: string;
  readonly seriesBackdropImageId?: string;
}

export interface ShowSeasonInfo extends LibraryData {
  readonly id: string;
  readonly showId: string;
  readonly seasonName: string;
  readonly folderImageId?: string;
}

export interface HlsStreamProps {
  readonly id: string;
  readonly url: string;
  readonly mediaInfo: MediaInfo;
  readonly startOffset: number;
  readonly duration: number; // Seconds
}
