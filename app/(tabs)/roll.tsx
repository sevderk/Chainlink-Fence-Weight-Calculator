import { useState } from "react";
import { View, ImageBackground } from "react-native";
import { ScreenContainer, Card, Text, Label } from "../../components/Themed";
import Field from "../../components/Field";
import Button from "../../components/Button";
import { calcRollWeight } from "../../lib/calc";

export default function RollScreen() {
  const [length, setLength] = useState("");
  const [height, setHeight] = useState("");
  const [m2Weight, setM2Weight] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const BOX_SCALE = 0.90;
  const BOX_WIDTH = 62;
  const LENGTH_TOP = 10;
  const LENGTH_SHIFT_LEFT = 3;
  const HEIGHT_TOP = 43;
  const HEIGHT_RIGHT = 2;
  const centeredLeft = (100 - BOX_WIDTH) / 2;
  const lengthLeft = centeredLeft - LENGTH_SHIFT_LEFT;

  return (
    <ScreenContainer>
      <View style={{ padding: 16, gap: 12 }}>
        <Card>
          <ImageBackground
            source={require("../../assets/images/roll-overlay.png")}
            resizeMode="contain"
            style={{ width: "100%", aspectRatio: 1, justifyContent: "center" }}
          >
            <View
              style={{
                position: "absolute",
                top: `${LENGTH_TOP}%`,
                left: `${lengthLeft}%`,
                width: `${BOX_WIDTH}%`,
                transform: [{ scale: BOX_SCALE }],
              }}
            >
              <Field
                showLabel={false}
                value={length}
                onChangeText={setLength}
                placeholder="Genişlik (m)"
                keyboardType="decimal-pad"
              />
            </View>

            <View
              style={{
                position: "absolute",
                top: `${HEIGHT_TOP}%`,
                right: `${HEIGHT_RIGHT}%`,
                width: `${BOX_WIDTH}%`,
                transform: [{ scale: BOX_SCALE }],
              }}
            >
              <Field
                showLabel={false}
                value={height}
                onChangeText={setHeight}
                placeholder="Yükseklik (m)"
                keyboardType="decimal-pad"
              />
            </View>
          </ImageBackground>

          {/* m² ağırlık girişi */}
          <View style={{ marginTop: 8 }}>
            <Field
              label="m² Ağırlık (kg)"
              value={m2Weight}
              onChangeText={setM2Weight}
              placeholder="m² sekmesinden"
              keyboardType="decimal-pad"
            />
          </View>

          <View style={{ marginTop: 12 }}>
            <Button
              title="Hesapla"
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
          <Label>Rulo Ağırlığı</Label>
          <Text style={{ fontSize: 24, fontWeight: "700" }}>
            {result ?? "-"} kg
          </Text>
        </Card>
      </View>
    </ScreenContainer>
  );
}
