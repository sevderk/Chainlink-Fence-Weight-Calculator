import { useState } from "react";
import { View } from "react-native";
import { ScreenContainer, Card, Text, Label } from "../../components/Themed";
import Field from "../../components/Field";
import Button from "../../components/Button";
import { calcM2Weight } from "../../lib/calc";

export default function M2Screen() {
  const [coated, setCoated] = useState<"PVC" | "Galvanized">("PVC");
  const [wire, setWire] = useState("");
  const [mesh, setMesh] = useState("");
  const [result, setResult] = useState<number | null>(null);

  return (
    <ScreenContainer>
      <View style={{ padding: 16, gap: 12 }}>
        <Card>
          <View style={{ flexDirection: "row", gap: 8, marginBottom: 12 }}>
            <Button title="PVC" onPress={() => setCoated("PVC")} />
            <Button title="Galvanized" onPress={() => setCoated("Galvanized")} />
          </View>

          <View style={{ gap: 12 }}>
            <Field label="Wire Thickness (mm)" value={wire} onChangeText={setWire} placeholder="e.g. 2.5" />
            <Field label="Mesh Size (mm)" value={mesh} onChangeText={setMesh} placeholder="e.g. 50" />
            <Button
              title={`${coated} Calculate`}
              onPress={() => {
                const val = calcM2Weight({
                  wireThicknessMm: parseFloat(wire),
                  meshSizeMm: parseFloat(mesh),
                  coated,
                });
                setResult(Number.isFinite(val) ? Number(val.toFixed(3)) : 0);
              }}
            />
          </View>
        </Card>

        <Card>
          <Label>Weight of 1 m²</Label>
          <Text style={{ fontSize: 24, fontWeight: "700" }}>{result ?? "-"} kg</Text>
        </Card>
      </View>
    </ScreenContainer>
  );
}
