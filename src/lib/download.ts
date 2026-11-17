import { SITE } from "@/lib/site";

const LATEST_RELEASE_API = `https://api.github.com/repos/${SITE.releasesRepo}/releases/latest`;

type ReleaseAsset = { name: string; browser_download_url: string };

/** Picks the Windows installer from a release's assets (easylobby_X.Y.Z_x64-setup.exe). */
export function pickInstaller(assets: ReleaseAsset[]): string | null {
  const exe = assets.find((a) => /-setup\.exe$/i.test(a.name));
  return exe ? exe.browser_download_url : null;
}

/**
 * Direct link to the newest installer. The file name changes with each version, so the
 * site asks GitHub for the latest release when the visitor clicks. If that fails, the
 * visitor lands on the releases page (SITE.downloadUrl) instead of a dead link.
 */
export async function resolveInstallerUrl(fetchFn: typeof fetch = fetch): Promise<string> {
  try {
    const res = await fetchFn(LATEST_RELEASE_API, {
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!res.ok) return SITE.downloadUrl;
    const data = (await res.json()) as { assets?: ReleaseAsset[] };
    return pickInstaller(data.assets ?? []) ?? SITE.downloadUrl;
  } catch {
    return SITE.downloadUrl;
  }
}

export async function startDownload() {
  window.location.href = await resolveInstallerUrl();
}
