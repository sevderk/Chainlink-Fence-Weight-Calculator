# 🛠️ Chain Link Fence Weight Calculator

A **modern Expo React Native app** that visually simulates chain link fence measurements for quick and accurate weight calculations.  
Now with **interactive overlays** — input boxes directly on the fence diagrams!

---

## 🚀 What it does

- 📐 **m² Weight Calculator** (with **PVC** / **Galvanized** option)
- 📏 **Roll Weight Calculator** (length × height × m² weight)
- 🏗️ **Project Weight Calculator** (total m² × m² weight)
- 🖼️ **Visual Input Overlays** — Enter wire and mesh sizes directly on realistic fence diagrams
- 🔑 **Auth Stubs**: Login & Signup with validation (demo token save/clear)
- 🎨 Light / Dark theme toggle in **Settings**
- 📱 Clean bottom tab navigation with **Expo Router**

---

## 💡 Notes

- The **m² weight** formula is currently a **placeholder** ➡️ update `lib/calc.ts` with your real production equations (wire thickness, mesh geometry, density, coating uplift).  
- **Roll** and **Project** calculators simply multiply area × m² weight — no extra coating needed.
- The visuals are placed via **ImageBackground** components with absolute-positioned `Field`s for intuitive design alignment.
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

![InCollage_20251005_142615223](https://github.com/user-attachments/assets/f095a605-f490-44a7-bd4f-0d7645ff7cc9)

---

![InCollage_20251005_142720378](https://github.com/user-attachments/assets/493f25aa-8d1d-4879-88f2-55a95c46d012)

---

![InCollage_20251005_143124637](https://github.com/user-attachments/assets/4aef93dd-fa20-471b-852b-56680777bd79)

---

![InCollage_20251005_143441247](https://github.com/user-attachments/assets/0e3467a5-62a7-4bca-8750-0f76c5c3c527)

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

---
## Author 🙋‍♀️
Made with 💚 by [@sevderk](https://github.com/sevderk)
