import { FFProbeResult } from "ffprobe";

export interface FfProbeInfoFormat {
  readonly duration?: number;
  readonly filename?: string;
}

export interface FfProbeInfo extends FFProbeResult {
  readonly format: FfProbeInfoFormat;
}

export interface UserPermissions {
  readonly isAdmin: boolean;
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

export interface Actor {
  readonly name: string;
  readonly role: string;
}

export interface EpisodeDetails {
  readonly plot?: string;
  readonly outline?: string;
  readonly title?: string;
  readonly director?: string;
  readonly writer?: string[];
  readonly credits?: string[];
  readonly rating?: number;
  readonly year?: number;
  readonly runtime?: number;
  readonly actor?: Actor[];
  readonly episode?: number;
  readonly episodenumberend?: number;
  readonly season?: number;
  readonly aired?: string; // TODO should be date
}

export interface SeasonDetails {
  readonly year?: number;
  readonly premiered?: string;
  readonly releasedate?: string;
  readonly seasonnumber?: number;
  readonly actor?: Actor[];
}

export interface ShowEpisodeInfo extends MediaInfo {
  readonly showId: string;
  readonly seasonId: string;
  readonly episodeImageId?: string;
  readonly details?: EpisodeDetails;
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
  readonly details?: SeasonDetails;
}

export interface HlsStreamProps {
  readonly id: string;
  readonly url: string;
  readonly mediaInfo: MediaInfo;
  readonly startOffset: number;
  readonly duration: number; // Seconds
}
