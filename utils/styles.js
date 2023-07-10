export const pathBackground = (path) => {
  switch (path) {
    case "/":
      return "url('images/photo3.jpg')";
    case "/about":
      return "url('images/photo2.jpg')";
    case "/contact":
      return "url('images/photo1.jpg')";
    case "/areas":
      return "url('images/photo1.jpg')";
    case "/build":
      return "url('images/photo9.jpg')";
    case "/community":
      return "url('images/slides/community.png')";
    case "/sustainability":
      return "url('images/slides/sand.png')";
    case "/construction":
      return "url('images/slides/sand.png')";
    case "/investment":
      return "url('images/slides/sand.png')";
    case "/common":
      return "url('images/slides/common.png')";
    case "/values":
      return "url('images/slides/sand.png')";
    case "/map":
      return "url('images/slides/map.png')";
    case "/land":
      return "url('images/slides/land.png')";
    case "/size":
      return "url('images/slides/size.png')";
    case "/ventanilla":
      return "url('images/slides/sand.png')";
    default:
      return "url('images/photo3.jpg')";
  }
};
