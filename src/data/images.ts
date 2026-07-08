/** Unsplash photo IDs (License: free to use — https://unsplash.com/license). */
export const UNSPLASH_IDS = {
  fleetLogistics: '1726866672851-5b99c837603c',
  healthcareClinic: '1758691462353-36b215702253',
  retailWarehouse: '1553413077-190dd305871c',
  professionalServices: '1522071820081-009f0129c71c',
  manufacturing: '1598302936625-6075fbd98dd7',
  nonprofit: '1593113598332-cd288d649433',
  cityGlobal: '1605702012553-e954fbde66eb',
  dataCenter: '1691435828932-911a7801adfb',
  happyClient: '1615891081220-9116de3e1afd',
} as const;

interface UnsplashUrlOptions {
  width: number;
  quality?: number;
}

export function unsplashUrl(id: string, { width, quality = 75 }: UnsplashUrlOptions): string {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=${quality}`;
}

export function unsplashSrcSet(id: string, widths: number[], quality = 75): string {
  return widths.map((w) => `${unsplashUrl(id, { width: w, quality })} ${w}w`).join(', ');
}
