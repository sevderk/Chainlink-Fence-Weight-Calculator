# 🛠️ Chain Link Fence Weight Calculator

A **modern Expo React Native app** that helps chain link fence producers calculate weights with ease!  
No more manual math ✨ — just tap, calculate, and get instant results.

---

## 🚀 What it does

- 📐 **m² Weight Calculator** (with **PVC** / **Galvanized** option)
- 📏 **Roll Weight Calculator** (length × height × m² weight)
- 🏗️ **Project Weight Calculator** (total m² × m² weight)
- 🔑 **Auth Stubs**: Login & Signup with validation (demo token save/clear)
- 🎨 Light / Dark theme toggle in **Settings**
- 📱 Clean bottom tab navigation with **Expo Router**

---

## 💡 Notes

- The **m² weight** formula is currently a **placeholder** ➡️ update `lib/calc.ts` with your real production equations (wire thickness, mesh geometry, density, coating uplift).  
- **Roll** and **Project** calculators simply multiply area × m² weight — no extra coating needed.  
- **Logout** clears token and returns you to the **m² Weight** tab.

---

## 🧪 Tech Stack

- ⚛️ **React Native (Expo)**
- 🗂️ **Expo Router**
- 🟦 **TypeScript**
- 💾 **AsyncStorage** for theme & demo token
- 🎨 Custom **dark/light theme**
- 🔠 **Ionicons** for icons

---

## 📸 Screenshots

![WhatsApp Image 2025-10-01 at 17 03 59_65919aa5](https://github.com/user-attachments/assets/bc44412d-71b5-4e83-a657-f11b1a28efce)
![WhatsApp Image 2025-10-01 at 17 04 02_1cded2e2](https://github.com/user-attachments/assets/0a0ac830-a4d4-40a7-a96d-c77c9023e277)
![WhatsApp Image 2025-10-01 at 17 04 04_c6367a45](https://github.com/user-attachments/assets/3c867f85-3907-4ff8-988c-fbfc928d9457)
![WhatsApp Image 2025-10-01 at 17 04 04_76498432](https://github.com/user-attachments/assets/0bc195d0-c767-48b5-bf4c-ccc03d9e2fa0)

---

## ▶️ Build & Run

**Requirements:** Node 18+, Git, Expo Go app on your phone.

```bash
# clone the repo
git clone https://github.com/sevderk/Chainlink-Fence-Weight-Calculator.git
cd Chainlink-Fence-Weight-Calculator

# install dependencies
npm install

# start Metro bundler
npx expo start
```

- 📱 Scan QR with Expo Go on your device
- 💻 Press a for Android emulator
- 🍏 Press i for iOS simulator (macOS only)
