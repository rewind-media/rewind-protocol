import { FFProbeResult, FFProbeStream } from "ffprobe";

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
  readonly audioStream?: FFProbeStream & { codec_type: "audio" };
  readonly videoStream?: FFProbeStream & { codec_type: "video" };
  readonly subtitle?:
    | FFProbeStream //  & { codec_type: "subtitle" } // TODO fix this in type definitions
    | FileLocation;
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

export interface LocalPath {
  readonly localPath: string;
}

export type FileLocation = LocalPath;
export function isFileLocation(t: any): t is FileLocation {
  try {
    const it = t as FileLocation;
    return isLocalPath(it);
  } catch (e) {
    return false;
  }
}
export function isLocalPath(t: FileLocation): t is LocalPath {
  return !!t.localPath;
}

export interface FileInfo extends LibraryData {
  readonly name: string;
  readonly id: string;
  readonly location: FileLocation;
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

interface SubtitleFile {
  readonly location: FileLocation;
  readonly name: string;
}

export interface EpisodeInfo extends MediaInfo {
  readonly showId: string;
  readonly seasonId: string;
  readonly episodeImageId?: string;
  readonly details?: EpisodeDetails;
  readonly subtitleFiles: SubtitleFile[];
}

export interface SeriesDetails {
  readonly plot?: string;
  readonly outline?: string;
  readonly dateadded?: string; // TODO should be a Date
  readonly title?: string;
  readonly originaltitle?: string;
  readonly rating?: number;
  readonly year?: number;
  readonly mpaa?: string; // TODO could probably be an enum
  readonly imdb_id?: string;
  readonly tmdbid?: string;
  readonly tvdbid?: string;
  readonly tvrageid?: string;
  readonly premiered?: string; // TODO should be a Date
  readonly releasedate?: string; // TODO should be a Date
  readonly enddate?: string; // TODO should be a Date
  readonly runtime?: number;
  readonly genere?: string;
  readonly studio?: string;
  readonly tag?: string[];
  readonly actor?: Actor[];
  readonly status?: string;
}

export interface ShowInfo extends LibraryData {
  readonly id: string;
  readonly showName: string;
  readonly seriesImageId?: string;
  readonly seriesBackdropImageId?: string;
  readonly details?: SeriesDetails;
}

export interface SeasonInfo extends LibraryData {
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
