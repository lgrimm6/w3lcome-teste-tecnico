const rgbColor = (): string => {
  const colors = [
    "#696969",
    "#836FFF",
    "#0000FF",
    "#00FFFF",
    "#ADFF2F",
    "#FF1493",
    "#FF0000",
    "#FFFF00",
  ];
  const randomIndex: number = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

export default rgbColor;
