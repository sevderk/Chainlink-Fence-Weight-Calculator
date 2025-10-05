import { useState } from "react";
import { View } from "react-native";
import { ScreenContainer, Card, Text, Label } from "../../components/Themed";
import Field from "../../components/Field";
import Button from "../../components/Button";
import { saveToken } from "../../lib/storage";
import { useRouter } from "expo-router";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const pwdRe = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_\-+=\[{\]};:'",.<>/?`~|\\]{8,}$/;

export default function Signup() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errs, setErrs] = useState<{ email?: string; pwd?: string }>({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const validate = () => {
    const e: typeof errs = {};
    if (!emailRe.test(email)) e.email = "Geçerli bir e-posta girin (örn. ornek@ornek.com)";
    if (!pwdRe.test(pwd)) e.pwd = "En az 8 karakter; harf ve rakam içermeli.";
    setErrs(e);
    return Object.keys(e).length === 0;
  };

  return (
    <ScreenContainer>
      <View style={{ padding: 16 }}>
        <Card>
          <Text style={{ fontSize: 20, fontWeight: "700", marginBottom: 12 }}>
            Hesap oluştur
          </Text>
          <View style={{ gap: 12 }}>
            <Field
              label="E-posta"
              keyboardType="email-address"
              value={email}
              onChangeText={(t) => {
                setEmail(t);
                if (errs.email) setErrs((p) => ({ ...p, email: undefined }));
              }}
              placeholder="ornek@ornek.com"
            />
            {errs.email ? <Label style={{ color: "#e53935" }}>{errs.email}</Label> : null}

            <Field
              label="Şifre"
              value={pwd}
              onChangeText={(t) => {
                setPwd(t);
                if (errs.pwd) setErrs((p) => ({ ...p, pwd: undefined }));
              }}
              placeholder="en az 8 karakter"
              secureTextEntry
            />
            {errs.pwd ? <Label style={{ color: "#e53935" }}>{errs.pwd}</Label> : null}

            <Button
              title="Kayıt Ol"
              loading={loading}
              onPress={async () => {
                if (!validate()) return;
                setLoading(true);
                await saveToken("demo-token");
                setLoading(false);
                router.replace("/(tabs)/m2");
              }}
            />
          </View>
        </Card>
      </View>
    </ScreenContainer>
  );
}
