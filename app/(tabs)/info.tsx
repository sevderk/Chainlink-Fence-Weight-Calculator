import { View } from "react-native";
import { ScreenContainer, Card, Text, Label } from "../../components/Themed";

export default function InfoScreen() {
  return (
    <ScreenContainer>
      <View style={{ padding: 16, gap: 12 }}>
        <Card>
          <Text style={{ fontSize: 18, fontWeight: "700", marginBottom: 8 }}>Chainlink Fence Weight Calculator</Text>
          <Label>
            • Calculate m² weight of the weaved wire.{"\n"}
            • Calculate weight of a roll.{"\n"}
            • Calculate total project (tender) weight.{"\n\n"}
            Results may vary by wire type & knitting settings.
          </Label>
        </Card>
      </View>
    </ScreenContainer>
  );
}
