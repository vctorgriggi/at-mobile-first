export const fakeData = [
  {
    id: 1,
    name: "Yanyin Canon II",
    description: "4BA + 1 Biological Dynamic Driver Hybrid HiFi IEMs",
  },
  {
    id: 2,
    name: "TANGZU Wu Zetian",
    description: "HIFI 14.5MM PLANAR DRIVER IN EAR EARPHONE",
  },
  {
    id: 3,
    name: "MOONDROP BLESSING 3",
    description: "not applicable",
  },
];

export function fakeList() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fakeData);
    }, 1000);
  });
}

export function fakeCreate(item) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newItem = { ...item, id: new Date().getTime() };
      fakeData.push(newItem);
      resolve({ success: true, item: newItem });
    }, 1000);
  });
}
