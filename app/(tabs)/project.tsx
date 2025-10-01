import { useState } from "react";
import { View } from "react-native";
import { ScreenContainer, Card, Text, Label } from "../../components/Themed";
import Field from "../../components/Field";
import Button from "../../components/Button";
import { calcProjectWeight } from "../../lib/calc";

export default function ProjectScreen() {
  const [total, setTotal] = useState("");
  const [m2Weight, setM2Weight] = useState("");
  const [result, setResult] = useState<number | null>(null);

  return (
    <ScreenContainer>
      <View style={{ padding: 16, gap: 12 }}>
        <Card>
          <View style={{ gap: 12 }}>
            <Field label="Total m² of Project" value={total} onChangeText={setTotal} placeholder="e.g. 450" />
            <Field label="m² Weight (kg)" value={m2Weight} onChangeText={setM2Weight} placeholder="from m² tab" />
            <Button
              title="Calculate"
              onPress={() => {
                const val = calcProjectWeight({
                  totalM2: parseFloat(total),
                  m2Weight: parseFloat(m2Weight),
                });
                setResult(Number.isFinite(val) ? Number(val.toFixed(2)) : 0);
              }}
            />
          </View>
        </Card>

        <Card>
          <Label>Project Weight</Label>
          <Text style={{ fontSize: 24, fontWeight: "700" }}>{result ?? "-"} kg</Text>
        </Card>
      </View>
    </ScreenContainer>
  );
}
