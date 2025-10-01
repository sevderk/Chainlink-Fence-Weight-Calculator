export function calcM2Weight(params: {
  wireThicknessMm: number;
  meshSizeMm: number;
  coated: "PVC" | "Galvanized";
}) {
  const { wireThicknessMm, meshSizeMm, coated } = params;
  const base = (wireThicknessMm || 0) * 0.12 + (100 / Math.max(meshSizeMm || 1, 1)) * 0.05;
  const coef = coated === "PVC" ? 1.08 : 1.0;
  return coef * base;
}

export function calcRollWeight(params: {
  lengthM: number;
  heightM: number;
  m2Weight: number;
}) {
  const area = (params.lengthM || 0) * (params.heightM || 0);
  return area * (params.m2Weight || 0);
}

export function calcProjectWeight(params: {
  totalM2: number;
  m2Weight: number;
}) {
  return (params.totalM2 || 0) * (params.m2Weight || 0);
}
