import { useState } from "react";
import { View, ImageBackground } from "react-native";
import { ScreenContainer, Card, Text, Label } from "../../components/Themed";
import Field from "../../components/Field";
import Button from "../../components/Button";
import { calcM2Weight } from "../../lib/calc";

export default function M2Screen() {
  const [coated, setCoated] = useState<"PVC" | "Galvanized">("PVC");
  const [wire, setWire] = useState("");
  const [mesh, setMesh] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const BOX_SCALE = 0.90;
  const BOX_WIDTH = 66;
  const TOP_Y = 7;
  const BOTTOM_Y = 63;

  const TEL_SHIFT_LEFT = 9;
  const centeredLeft = (100 - BOX_WIDTH) / 2;
  const telLeft = centeredLeft - TEL_SHIFT_LEFT;

  return (
    <ScreenContainer>
      <View style={{ padding: 16, gap: 12 }}>
        <Card>
          <ImageBackground
            source={require("../../assets/images/m2-overlay.png")}
            resizeMode="contain"
            style={{ width: "100%", aspectRatio: 1, justifyContent: "center" }}
          >
            <View
              style={{
                position: "absolute",
                top: `${TOP_Y}%`,
                left: `${telLeft}%`,
                width: `${BOX_WIDTH}%`,
                transform: [{ scale: BOX_SCALE }],
              }}
            >
              <Field
                showLabel={false}
                value={wire}
                onChangeText={setWire}
                placeholder="Tel kalınlığı (mm)"
                keyboardType="decimal-pad"
              />
            </View>

            <View
              style={{
                position: "absolute",
                top: `${BOTTOM_Y}%`,
                width: `${BOX_WIDTH}%`,
                alignSelf: "center",
                transform: [{ scale: BOX_SCALE }],
              }}
            >
              <Field
                showLabel={false}
                value={mesh}
                onChangeText={setMesh}
                placeholder="Göz aralığı (mm)"
                keyboardType="decimal-pad"
              />
            </View>
          </ImageBackground>

          <View style={{ flexDirection: "row", gap: 12, marginTop: 8 }}>
            <Button
              title="PVC"
              variant="outline"
              selected={coated === "PVC"}
              onPress={() => setCoated("PVC")}
            />
            <Button
              title="Galvaniz"
              variant="outline"
              selected={coated === "Galvanized"}
              onPress={() => setCoated("Galvanized")}
            />
          </View>

          <View style={{ marginTop: 12 }}>
            <Button
              title="Hesapla"
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
          <Label>1 m² Ağırlık</Label>
          <Text style={{ fontSize: 24, fontWeight: "700" }}>
            {result ?? "-"} kg
          </Text>
        </Card>
      </View>
    </ScreenContainer>
  );
}
