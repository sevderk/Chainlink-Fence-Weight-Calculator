import { useState } from "react";
import { View } from "react-native";
import { ScreenContainer, Card, Text, Label } from "../../components/Themed";
import Field from "../../components/Field";
import Button from "../../components/Button";
import { calcRollWeight } from "../../lib/calc";

export default function RollScreen() {
  const [length, setLength] = useState("");
  const [height, setHeight] = useState("");
  const [m2Weight, setM2Weight] = useState("");
  const [result, setResult] = useState<number | null>(null);

  return (
    <ScreenContainer>
      <View style={{ padding: 16, gap: 12 }}>
        <Card>
          <View style={{ gap: 12 }}>
            <Field label="Length (m)" value={length} onChangeText={setLength} placeholder="e.g. 10" />
            <Field label="Height (m)" value={height} onChangeText={setHeight} placeholder="e.g. 2" />
            <Field label="m² Weight (kg)" value={m2Weight} onChangeText={setM2Weight} placeholder="from m² tab" />
            <Button
              title="Calculate"
              onPress={() => {
                const val = calcRollWeight({
                  lengthM: parseFloat(length),
                  heightM: parseFloat(height),
                  m2Weight: parseFloat(m2Weight),
                });
                setResult(Number.isFinite(val) ? Number(val.toFixed(3)) : 0);
              }}
            />
          </View>
        </Card>

        <Card>
          <Label>Roll Weight</Label>
          <Text style={{ fontSize: 24, fontWeight: "700" }}>{result ?? "-"} kg</Text>
        </Card>
      </View>
    </ScreenContainer>
  );
}
