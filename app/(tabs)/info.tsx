import { View } from "react-native";
import { ScreenContainer, Card, Text, Label } from "../../components/Themed";

export default function InfoScreen() {
  return (
    <ScreenContainer>
      <View style={{ padding: 16, gap: 12 }}>
        <Card>
          <Text style={{ fontSize: 18, fontWeight: "700", marginBottom: 8 }}>
            Zincirli Tel Çit Ağırlık Hesaplayıcı
          </Text>
          <Label>
            • Örülü telin m² ağırlığını hesaplayın.{"\n"}
            • Rulo ağırlığını hesaplayın.{"\n"}
            • Proje (ihale) toplam ağırlığını hesaplayın.{"\n\n"}
            Sonuçlar tel tipi ve örme ayarlarına göre değişiklik gösterebilir.
          </Label>
        </Card>
      </View>
    </ScreenContainer>
  );
}
