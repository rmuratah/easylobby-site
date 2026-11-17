import { describe, expect, it } from "vitest";

import { pickInstaller, resolveInstallerUrl } from "@/lib/download";
import { SITE } from "@/lib/site";

const exe =
  "https://github.com/rmuratah/easylobby-site/releases/download/v0.1.2/easylobby_0.1.2_x64-setup.exe";

function fakeFetch(status: number, body: unknown) {
  return (async () => new Response(JSON.stringify(body), { status })) as typeof fetch;
}

describe("download", () => {
  it("escolhe o instalador entre os arquivos da release", () => {
    expect(
      pickInstaller([
        { name: "latest.json", browser_download_url: "x" },
        { name: "easylobby_0.1.2_x64-setup.exe.sig", browser_download_url: "y" },
        { name: "easylobby_0.1.2_x64-setup.exe", browser_download_url: exe },
      ]),
    ).toBe(exe);
  });

  it("baixa o instalador da última release", async () => {
    const url = await resolveInstallerUrl(
      fakeFetch(200, {
        assets: [{ name: "easylobby_0.1.2_x64-setup.exe", browser_download_url: exe }],
      }),
    );
    expect(url).toBe(exe);
  });

  it("cai na página de releases quando não há release ou a API falha", async () => {
    expect(await resolveInstallerUrl(fakeFetch(404, {}))).toBe(SITE.downloadUrl);
    expect(await resolveInstallerUrl(fakeFetch(200, { assets: [] }))).toBe(SITE.downloadUrl);
    const broken = (async () => {
      throw new Error("offline");
    }) as typeof fetch;
    expect(await resolveInstallerUrl(broken)).toBe(SITE.downloadUrl);
  });
});
