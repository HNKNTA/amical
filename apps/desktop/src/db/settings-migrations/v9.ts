import type { AppSettingsData } from "../schema";

// v8 -> v9: add keepTranscriptInClipboard preference
export function migrateToV9(data: unknown): AppSettingsData {
  const oldData = data as AppSettingsData;
  const preferences = oldData.preferences ?? {};

  return {
    ...oldData,
    preferences: {
      ...preferences,
      keepTranscriptInClipboard: false,
    },
  };
}